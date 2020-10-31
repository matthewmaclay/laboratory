// @ts-nocheck
import { useMemo } from "react";
import { ApolloClient, createHttpLink, InMemoryCache, setC } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { getToken } from "utils";

let apolloClient;

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: `${process.env.STRAPI_URL}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getToken();
    // return the headers to the context so httpLink can read them
    const customHeaders = {};
    if(token){
      customHeaders.authorization = `Bearer ${token}`

    } 
    return {
      headers: {
        ...headers,
        ...customHeaders,
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),

    cache: new InMemoryCache(),
  });
}
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
