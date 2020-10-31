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

const TextWrapper = styled.div`
  & .bb-TextBlock {
    opacity: 0.5;
  }
`;

const IndexTeacherPage: React.FC = ({ children }) => {
  const [description, setDescription] = useState<string>();
  const [copyDescription, setCopyDescription] = useState<string>();
  const [timer, setTimer] = useState<number>();
  const [point, setPoint] = useState<number>();

  const { query } = useRouter();
  const id = query.id as string;

  const [activeTask, setActiveTask] = useState({});
  useEffect(() => {
    if (activeTask.id) {
      const exercise = dataExercises.exercises.find(
        (i) => i.id === activeTask.id
      );
      setTimer(Number.isInteger(exercise.timer)?exercise.timer: 20);
      setDescription(exercise.description);
      setCopyDescription(exercise.description);
      setPoint(Number.isInteger(exercise.point)?exercise.point: 5);
    }
  }, [activeTask.id]);
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
  const [createEmptyExercise] = useCreateEmptyExerciseMutation({
    onCompleted: () => {
      try{
        refetchExercises();

      } catch{}
    },
  });

  const [updateExercise] = useUpdateExerciseMutation({
    onCompleted: () => refetchExercises(),
  });

  const { data: dataExercise } = useGetExerciseByIdQuery({
    variables: { id: activeTask.id },
  });
  return (
    <WithSideBar
      header={<>{activeTask.title}</>}
      lastBlock={
        <Link
          onClick={() => createEmptyExercise({ variables: { taskId: id } })}
        >
          + Добавить номер
        </Link>
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
        activeTask.id && (
          <Flex flexDirection="column" paddingLeft="5px" overflowX="scroll">
            <Heading use="h4" marginBottom="20px">
              Таблица проверки решения ученика
            </Heading>
            <Text opacity="0.6" marginBottom="20px">
              Эта какая-то таблица и она как-то работает
            </Text>
            <TableTest></TableTest>
          </Flex>
        )
      }
    >
      {dataExercises && activeTask.id && (
        <Flex flexDirection="column">
          <Box marginTop="-25px">
            <Editor
              onChange={setDescription}
              initialContent={copyDescription}
            ></Editor>
          </Box>
          <Divider width="80%" marginBottom="48px" />
          <TextWrapper>
            <InputField
              marginBottom="30px"
              description="Необходим для расчета рейтинга и производительности ученика"
              label="Баллы за номер"
              type="number"
              width="80%"
              placeholder="Баллы за задачу"
              value={point}
              onChange={({ target }) => setPoint(target.value)}
            ></InputField>

            <InputField
              description="Учитывается при расчете рейтинга"
              label="Таймер (в минутах)"
              type="number"
              width="80%"
              placeholder="Таймер"
              value={timer}
              onChange={({ target }) => setTimer(target.value)}
            ></InputField>
          </TextWrapper>
          <Button
            onClick={() => {
              updateExercise({
                variables: {
                  timer: +timer,
                  description,
                  point: +point,
                  id: activeTask.id,
                },
              });
            
            }}
            width="180px"
            marginTop="15px"
            palette="primary"
            size="medium"
          >
            Сохранить номер
          </Button>
        </Flex>
      )}
    </WithSideBar>
  );
};

export default IndexTeacherPage;
