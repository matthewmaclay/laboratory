import SignLayout from "components/layouts/sign";
import { Input, InputField, Button } from "bumbag";
import React from "react";
import ButtonLink from "components/ButtonLink";
import { useForm } from "react-hook-form";
import { useLoginMutation, useRegisterMutation } from "graphqlTypes";
import { setToken, setUserId } from "utils";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, getValues } = useForm();
  const [login, { data, error, loading }] = useLoginMutation();
  React.useEffect(() => {
    const jwt = data?.login?.jwt;
    const id = data?.login.user.id;
    if (jwt) {
      setToken(jwt);
      setUserId(id);
      router.push("/profile");
    }
  }, [data]);
  const onSubmit = () => {
    const { email, password } = getValues();
    login({
      variables: {
        identifier: email,
        password,
      },
    });
  };

  return (
    <SignLayout
      header="Авторизация"
      underBlock={
        <ButtonLink variant="link" href="/signup">
          На страницу регистрации
        </ButtonLink>
      }
    >
      <InputField
        inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
        name="email"
        label="Почта"
      />
      <InputField
        type="password"
        inputRef={register}
        name="password"
        label="Пароль"
      />
      <Button onClick={onSubmit}>Войти</Button>
    </SignLayout>
  );
};

export default SignInPage;
