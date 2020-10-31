import React, { useEffect, useState } from "react";
import { Button, Card, Input, Modal, Spinner, styled } from "bumbag";
import { useRouter } from "next/router";
import Editor from "components/Editor";

import { Box, Flex, Heading, Dialog } from "bumbag";
import {
  useGetLessonQuery,
  Enum_Lesson_Status,
  useUpdateLessonContentMutation,
  useCreateCommentMutation,
} from "graphqlTypes";
import PageWithHeader from "components/layout/withHeader";
import LessonHeader from "components/layout/LessonHeader";
import { LessonComponenProps } from "./Check";
import CustomStyleForEditor from "components/CustomStyleForEditor";

interface ClickPositionState {
  clientY: number;
  clinetX: number;
}

const Div = styled.div`
  cursor: copy;
`;

const StyledBox = styled(Box)`
  img {
    width: 100%;
  }
`;

const MakeCommentsComponent: React.FC<LessonComponenProps> = (props) => {
  const {
    query: { id },
  } = useRouter();
  const modalRef = React.useRef();
  const [value, setValue] = React.useState("");
  const [clickPosition, setClickPosition] = React.useState<ClickPositionState>(
    {}
  );

  const [content, setContent] = React.useState<string>("");
  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });
  const [
    updateContent,
    { data: updateContentData },
  ] = useUpdateLessonContentMutation();
  const [
    createComment,
    { data: dataCreateMutation, errorCreateMutation, loadingCreateMutation },
  ] = useCreateCommentMutation();

  if (error) return "ошибка";
  if (loading)
    return (
      <LessonHeader id={id}>
        <Spinner fontSize="50px" />
      </LessonHeader>
    );

  const handleChange = (content) => {
    updateContent({ variables: { id, content } });
  };
  return (
    <LessonHeader {...props} id={id}>
      <Heading
        cursor="default"
        marginTop="68px"
        marginBottom="40px"
        maxWidth="620px"
        use="h2"
      >
        {data.lesson.title}
      </Heading>
      <Modal.State>
        <Modal.Disclosure
          use={Div}
          tabIndex={"asd"}
          ref={modalRef}
          onClick={(e) => {
            document.body.focus();

            setClickPosition({ clientY: e.pageY, clinetX: e.pageX });
          }}
          textAlign="inherit"
        >
          <CustomStyleForEditor>
            <StyledBox
              width="620px"
              paddingTop="major-2"
              flexBasis="30%"
              flexDirection="column"
              dangerouslySetInnerHTML={{
                __html: data.lesson.content,
              }}
            ></StyledBox>
          </CustomStyleForEditor>
        </Modal.Disclosure>

        <Modal preventBodyScroll={false}>
          <Card>
            <Input
              placeholder="Оставьте ваш коментарий и нажмите enter"
              width="620px"
              value={value}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  createComment({
                    variables: {
                      content: value,
                      leftOffset: clickPosition.clinetX,
                      topOffset: clickPosition.clientY,
                      lesson: id,
                    },
                  });

                  setValue("");
                  modalRef.current.click();
                }
              }}
              onChange={(r) => {
                setValue(r.target.value);
              }}
            />
          </Card>
        </Modal>
      </Modal.State>
    </LessonHeader>
  );
};

export default MakeCommentsComponent;
