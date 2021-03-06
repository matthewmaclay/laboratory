import SignLayout from "components/layouts/sign";
import {
  Input,
  InputField,
  Button,
  Flex,
  Spinner,
  OptionButtons,
  Stack,
  useColorMode,
  Text,
  Set,
  Avatar,
} from "bumbag";

import React from "react";
import {
  useMeQuery,
  useMakeMeStudentMutation,
  useMakeMeTeacherMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} from "graphqlTypes";
import { getUserId, setToken } from "utils";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const ChooseRole = () => {
  const router = useRouter();
  const { colorMode, setColorMode } = useColorMode();
  const [role, setRole] = React.useState("");
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [patr, setPatr] = React.useState("");
  const [theme, setTheme] = React.useState("");
  const { register, handleSubmit, errors, getValues } = useForm({
    reValidateMode: "onChange",
  });
  console.log(getValues())
  const { data } = useGetUserQuery({
    variables: { id: getUserId() },
    ssr: false,
  });
  React.useEffect(() => {
    if (data && data.user.firstName && data.user.lastName) router.push("/");
  }, [data]);
  const [updateUser] = useUpdateUserMutation({
    onCompleted: () => {
      router.push("/");
      window.localStorage.setItem("refetchUser", "true");
    },
  });
  const onSubmit = () => {
    const {
      firstName,
      lastName,
      patronymic,
      birthday,
      organization,
    } = getValues();
    const avatar = `https://avatars.dicebear.com/api/bottts/${encodeURI(
      firstName + lastName + patronymic
    )}.svg?mood[]=happy`;
    updateUser({
      variables: {
        patronymic,
        lastName,
        firstName,
        birthday,
        organization,
        avatar,
        teacher: role === "teacher",
        id: getUserId(),
      },
    });
  };

  if (!data || data.user.firstName) return <Spinner size="large" />;

  const avatar = `https://avatars.dicebear.com/api/bottts/${encodeURI(
    first + last + patr
  )}.svg?mood[]=happy`;

  return (
    <SignLayout header="Заполните информацию о вас">
      <Flex justifyContent="center">
        <Avatar marginBottom="20px" src={avatar} />
      </Flex>

      <OptionButtons
        width="100%"
        marginBottom="20px"
        display="flex"
        justifyContent="center"
        defaultValue="desktop"
        type="radio"
        onChange={setRole}
        value={role}
        options={[
          { label: "Учитель", value: "teacher" },
          { label: "Ученик", value: "student" },
        ]}
      />
      <InputField
        type="text"
        inputRef={register}
        onChange={({ target }) => setLast(target.value)}
        name="lastName"
        label="Фамилия"
      />
      <InputField
        type="text"
        inputRef={register}
        onChange={({ target }) => setFirst(target.value)}
        name="firstName"
        label="Имя"
      />
      <InputField
        type="text"
        inputRef={register}
        onChange={({ target }) => setPatr(target.value)}
        name="patronymic"
        label="Отчество"
      />
      <InputField
        type="date"
        inputRef={register}
        onChange={({ target }) => setBirthday(target.value)}
        name="birthday"
        label="Дата рождения"
      />
      <InputField
        type="text"
        inputRef={register}
        onChange={({ target }) => setOrganization(target.value)}
        name="organization"
        label="Образовательная организация"
      />

      <Button
        disabled={
          !first ||
          !last ||
          !patr ||
          !avatar ||
          !role ||
          !birthday ||
          !organization
        }
        width="100%"
        onClick={onSubmit}
      >
        Сохранить
      </Button>
    </SignLayout>
  );
};

export default ChooseRole;
