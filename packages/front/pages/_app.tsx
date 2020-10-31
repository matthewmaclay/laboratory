/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css, palette } from "bumbag";
// import Pallete from "bumbag/src/theme/palette";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";

import { useApollo } from "lib/apolloClient";
import "@babel/polyfill";
import { useRouter } from "next/router";
import { getToken } from "utils";
import { debug } from "console";
import { useGetUserQuery, useMeQuery } from "graphqlTypes";
import UserProvider from "components/providers/UserProvider";

const GlobalStyle = createGlobalStyle`
	#__next {
		height: 100%;
	}
	html {
		height: 100%;
	}
	body {
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	.hint{
		background-color: #924FD1;
		cursor: pointer;
	}
`;

const theme = {
  SelectMenu: {
    defaultProps: {
      width: "100%",
      marginBottom: "20px",
    },

    Button: {
      styles: {
        base: {
          background: "#27303f",
          borderColor: "#4c586a",
        },
      },
    },
  },
  InputField: {
    defaultProps: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  global: {
    styles: {
      base: css`
        height: 100%;
        .demo-editor {
          padding: 0 20px;
        }
        .withoutUnderlineLink {
          position: relative;
        }
        .withoutUnderlineLink > a {
          color: inherit;
          font-size: inherit;
          text-decoration: none;
          width: 100%;
          height: 100%;
          &:before {
            content: " ";
            position: absolute;
          }
        }
        .bb-Button > a {
          height: 100%;
        }
        button: {
          styles: {
            base: {
              background: "#5454E2";
            }
          }
        }
      `,
    },
  },
};

interface Props {
  Component: React.FC;
  pageProps: any;
}
const PUBLIC_PAGES = ["/signin", "/signup"];
export default function App({ Component, pageProps }: Props) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const { pathname, push } = useRouter();
  React.useEffect(() => {
    const isPublic = PUBLIC_PAGES.some((i) => i === pathname);
    const token = getToken();
    if (!isPublic && !token) {
      push("/signin");
    }
  }, [pathname]);
  React.useEffect(() => {
    window.localStorage.setItem("bb.mode", "dark");
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <BumbagProvider theme={theme}>
          <Head>
            <link rel="stylesheet" href="/css/medium-editor.css" />
            <link rel="stylesheet" href="/css/themes/bootstrap.css" />
            <link rel="stylesheet" href="/css/tippy.css" />
          </Head>
          <Component {...pageProps} />
          <GlobalStyle />
        </BumbagProvider>
      </UserProvider>
    </ApolloProvider>
  );
}
