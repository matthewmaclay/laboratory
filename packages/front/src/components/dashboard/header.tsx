import React, { useState } from "react";
import style from "styled-components";
import { Button } from "bumbag";
import Link from "next/link";
import { useCreateEmptyTaskMutation } from "graphqlTypes";
import { useRouter } from "next/router";

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 2px solid #4E5868;

    .name.selected {
        color: #5454E2;
    }
`;

const StyledInput = style.div`
    margin: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;      
    color: #E0E4EA;
    cursor: pointer;
`;

const StyledBlockStatus = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledBlockButton = style.div`

`;

const EditorHeader = ({ fun, activeGroupId, isStudent }) => {
  const router = useRouter();
  const [createEmptyTaskMutation] = useCreateEmptyTaskMutation({
    onCompleted: (data) => {
      router.push(`/teacher/tasks/${data.createTask.task.id}`);
    },
  });
  const [choseType, setType] = useState();

  function choseTypeReq(name) {
    setType(name);
  }

  function handleClick(type: string) {
    fun(type);
  }
  return (
    <StyledLessonHeader>
      <StyledBlockStatus>
        <StyledInput
          className={`name ${choseType == "Task" ? "selected" : ""}`}
          onClick={() => {
            choseTypeReq("Task");
            handleClick("Task");
          }}
        >
          Задания
        </StyledInput>
        {!isStudent && (
          <StyledInput
            className={`name ${choseType == "Stady" ? "selected" : ""}`}
            onClick={() => {
              choseTypeReq("Stady");
              handleClick("Stady");
            }}
          >
            Ученики
          </StyledInput>
        )}
      </StyledBlockStatus>
      {!isStudent && (
        <StyledBlockButton>
          <Button variant="ghost" color="#E0E4EA">
            Пригласить
          </Button>
          <Button
            onClick={() =>
              createEmptyTaskMutation({ variables: { groupId: activeGroupId } })
            }
            palette="primary"
          >
            + Создать задание
          </Button>
        </StyledBlockButton>
      )}
    </StyledLessonHeader>
  );
};

export default EditorHeader;
