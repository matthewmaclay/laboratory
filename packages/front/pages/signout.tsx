import { useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import { removeToken } from "utils";
import { Spinner, useToasts } from "bumbag";

const SignOutMutation = gql`
  mutation SignOutMutation {
    signOut
  }
`;

function SignOut() {
  const client = useApolloClient();
  const toasts = useToasts();
  const router = useRouter();
  const [signOut] = useMutation(SignOutMutation);

  useEffect(() => {
    removeToken();
    toasts.success({
      title: "Успешный выход из аккаунта",
    });
    router.push("/signin");
  }, []);

  return <Spinner size="medium" />;
}

export default SignOut;
