import React, { useContext, useEffect, useState } from "react";
import { Modal, Card, Button, Box, Link, Heading, InputField, Divider } from "bumbag";

import WithSideBar from "components/layout/WithSideBar";
import {
  useCreateEmptyExerciseMutation,
  useCreateGroupMutation,
  useGetExerciseByIdQuery,
  useGetExercisesByTaskIdQuery,
  useGetGroupsWhereIamTeacherQuery,
  useGetStudentsQuery,
  useGetTasksByGroupIdQuery,
} from "graphqlTypes";
import { UserContext } from "components/providers/UserProvider";
import AvatarWithName from "components/AvatarWithName";
import { Spinner, Flex, SelectMenu } from "bumbag";
import styled from "styled-components";
import { useRouter } from "next/router";
import Editor from "components/Editor";
import TableTest from "components/table/TableTest";

const TextWrapper = styled.div`
  & .bb-TextBlock{
    opacity: 0.5;
  }
`;

const IndexTeacherPage: React.FC = ({ children }) => {
  const { query } = useRouter();
  const id = query.id as string;
  const IAM = useContext(UserContext);
  const [activeTask, setActiveTask] = useState({});
  const [students, setStudents] = React.useState();
  const [titleNewGroup, setTitleNewGroup] = React.useState("");
  const user = useContext(UserContext);
  const {
    data: dataExercises,
    refetch: refetchExercises,
  } = useGetExercisesByTaskIdQuery({
    variables: { id },
  });
  const [createEmptyExercise] = useCreateEmptyExerciseMutation({
    onCompleted: () => {
      refetchExercises();
    },
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
        <div>
          <Link>Результаты</Link>
        </div>,
        <div>
          {!dataExercises ? (
            "Добавьте упражнение"
          ) : (
            <Flex marginTop="40px" flexDirection="column">
              {!!dataExercises.exercises.length &&
                dataExercises.exercises.map((i, index) => (
                  <Link
                    onClick={() =>
                      setActiveTask({ id: i.id, title: `Номер ${index + 1}` })
                    }
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
      rightBlock={<Flex paddingLeft="5px" overflowX="scroll"><TableTest></TableTest></Flex>}
    >
      {dataExercises && (
        <Flex flexDirection="column">
          <Editor onChange={console.log} initialContent=""></Editor>
          <Divider marginBottom="48px"/>
          <TextWrapper>
          <InputField marginBottom="30px" description="Необходим для расчета рейтинга и производительности ученика" label="Баллы за номер" type="number" width="80%" placeholder="Баллы за задачу"></InputField>

          <InputField description="Учитывается при расчете рейтинга" label="Таймер (в минутах)" type="number" width="80%" placeholder="Таймер"></InputField>
          </TextWrapper>
        </Flex>
      )}
    </WithSideBar>
  );
};

export default IndexTeacherPage;
