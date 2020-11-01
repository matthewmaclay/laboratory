import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Card,
  Button,
  Box,
  Link,
  Heading,
  InputField,
  Divider,
  Text,
  ToastManager
} from "bumbag";
import LinkNext from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "bumbag";
import WithSideBar from "components/layout/WithSideBar";
import {
  useCreateEmptyExerciseMutation,
  useCreateGroupMutation,
  useGetExerciseByIdQuery,
  useGetExercisesByTaskIdQuery,
  useGetGroupsWhereIamTeacherQuery,
  useGetStudentsQuery,
  useGetTasksByGroupIdQuery,
  useUpdateExerciseMutation,
} from "graphqlTypes";
import { UserContext } from "components/providers/UserProvider";
import AvatarWithName from "components/AvatarWithName";
import { Spinner, Flex, SelectMenu } from "bumbag";
import styled from "styled-components";
import { useRouter } from "next/router";
import Editor from "components/Editor";
import TableTest from "components/table/TableTest";
import CodeEditor from "components/NoSSRCodeEditor";
import ButtonLink from "components/ButtonLink";

const TextWrapper = styled.div`
  & .bb-TextBlock {
    opacity: 0.5;
  }
`;

const IndexTeacherPage: React.FC = ({ children }) => {
  const [description, setDescription] = useState<string>();
  const [tests, setTests] = useState<string>(); // ТАБЛИЦА ДЛЯ ТЕСТОВ У УЧЕНИКА

  const { query } = useRouter();
  const id = query.id as string;

  const [activeTask, setActiveTask] = useState({});
  useEffect(() => {
    if (activeTask.id) {
      const exercise = dataExercises.exercises.find(
        (i) => i.id === activeTask.id
      );
      setDescription(exercise.description);
      setTests(exercise.tests);
    }
  }, [activeTask.id]);
  console.log(tests)
  const {
    data: dataExercises,
    refetch: refetchExercises,
  } = useGetExercisesByTaskIdQuery({
    variables: { id },
    onCompleted: (data) => {
      if (data.exercises.length)
        setActiveTask({ id: data.exercises[0].id, title: "Номер 1" });
    },
  });

  return (
    <WithSideBar
      header={
        <Flex alignItems="center" width="100%" justifyContent="space-between">
          {activeTask.title}
          <ButtonLink size="small" href="/signout">
            Выйти
          </ButtonLink>
        </Flex>
      }
      blocks={[
        <Flex flexDirection="column">
          <LinkNext href="/">
            <Icon
              cursor="pointer"
              opacity="0.5"
              aria-label="Settings"
              icon={faArrowLeft}
              type="font-awesome"
            />
          </LinkNext>
          <Heading marginTop="24px" use="h4">
            Задание
          </Heading>
        </Flex>,
        <div>
          <Link>Результаты</Link>
        </div>,
        <div>
          {dataExercises && !dataExercises.exercises.length ? (
            "Добавьте упражнение"
          ) : (
            <Flex marginTop="40px" flexDirection="column">
              {!!dataExercises?.exercises.length &&
                dataExercises.exercises.map((i, index) => (
                  <Link
                    onClick={() => {
                      setActiveTask({ id: i.id, title: `Номер ${index + 1}` });
                    }}
                    marginBottom="21px"
                    color={activeTask.id == i.id ? "white" : "#8883F1"}
                  >
                    Номер {index + 1}
                  </Link>
                ))}
            </Flex>
          )}
        </div>,
      ]}
      rightBlock={
        <Flex
          marginTop="-40px"
          marginLeft="-61px"
          flexDirection="column"
          paddingLeft="5px"
          overflowX="hidden"
        >
          <CodeEditor id={activeTask.id} />
        </Flex>
      }
    >
      {dataExercises && activeTask.id && (
        <Flex flexDirection="column">
          <Box
            marginTop="-25px"
            dangerouslySetInnerHTML={{ __html: description }}
          ></Box>
        </Flex>
      )}
    </WithSideBar>
  );
};

export default IndexTeacherPage;
