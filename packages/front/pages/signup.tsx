import SignLayout from "components/layouts/sign";
import { Input, InputField, Button } from "bumbag";
import React from "react";
import ButtonLink from "components/ButtonLink";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "graphqlTypes";
import { setToken } from "utils";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, getValues } = useForm();
  const [registration, { data, error, loading }] = useRegisterMutation();
  React.useEffect(() => {
    if (data?.register?.jwt) router.push("/signin");
  }, [data]);
  const onSubmit = () => {
    const { email, password } = getValues();
    registration({
      variables: {
        email,
        password,
        username: email,
      },
    });
  };

  return (
    <SignLayout
	header="Регистрация"
      underBlock={
        <ButtonLink variant="link" href="/signin">
          На страницу авторизации
        </ButtonLink>
      }
    >
      <InputField
        inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
        name="email"
        label="Почта"
      />
      <InputField type="password" inputRef={register} name="password" label="Пароль" />

      <Button onClick={onSubmit}>Зарегистрироваться</Button>
    </SignLayout>
  );
};

export default SignInPage;
