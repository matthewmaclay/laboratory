import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Drawer, Spinner } from "bumbag";
import { useRouter } from "next/router";
import Editor from "components/Editor";

import { Flex } from "bumbag";
import {
  useGetLessonQuery,
  Enum_Lesson_Status,
  useUpdateLessonContentMutation,
} from "graphqlTypes";
import htmlToText from "html-to-text";
import PageWithHeader from "components/layout/withHeader";
import LessonHeader from "components/layout/LessonHeader";
import Head from "next/head";
import { Box } from "bumbag";
import styled from "styled-components";

const DrawerContent = styled.div`
  a {
    text-decoration: none;
    color: #5454e2;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
  table {
    margin-top: 20px;
    background: rgba(231, 232, 234, 0.6);
    border-radius: 4px;
  }
  tbody {
    height: 200px;
    display: flex;
    tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      min-width: 75px;
      th {
        &:nth-child(1) {
          color: #c83227;
        }
        &:nth-child(2) {
          color: #27ae60;
        }
      }
    }
  }
`;

function stripHtml(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export interface LessonComponenProps {
    isEditor?: boolean;
}

const CheckComponent: React.FC<LessonComponenProps> = (props) => {
  const {
    query: { id },
  } = useRouter();
  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });
  const [text, setText] = React.useState("");
  const [glavred, setGlavred] = React.useState("");
  const [activeHint, setActiveHint] = React.useState(null);
  const drawer = Drawer.useState();
  React.useEffect(() => {
    const handler = (e) => {
      e.stopPropagation();
      if (e.target.className === "hint") {
        const hint = e.target.dataset.hintId;

        if (activeHint !== hint) {
          setActiveHint(hint);
          drawer.show();
        }
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  React.useEffect(() => {
    if (data) {
      const STRIP = htmlToText.fromString(data.lesson.content, {
        uppercaseHeadings: false,
      });

      setText(STRIP);

      var formData = new FormData();
      formData.append("chunks", STRIP);
      fetch("https://glvrd.ru/api/v0/@proofread/", {
        method: "POST",
        body: formData, // body data type must match "Content-Type" header
      })
        .then((r) => r.json())
        .then((r) => {
          if (!r.fragments[0].length) {
            setText("Ошибок не обнаружено");
            return null;
          }
          setGlavred(r);

          let newText = "";
          let lastIndex = 0;
          r.fragments[0].forEach((i) => {
            const previous = STRIP.slice(lastIndex, i.start);
            const word = STRIP.slice(i.start, i.end);
            lastIndex = i.end;
            const span = `<span class="hint" data-hint-id="${i.hint}" >${word}</span>`;
            newText = newText + previous + span;
          });
          setText(newText);
        });
    }
  }, [data]);

  if (error) return "ошибка";
  if (loading) return <LessonHeader {...props} id={id}><Spinner size="large"></Spinner></LessonHeader>

  return (
    <LessonHeader {...props} id={id}>
      <Drawer
        position="abilute"
        width="375px"
        padding="40px 20px 0 20px"
        hideBackdrop
        placement="right"
        preventBodyScroll={false}
        {...drawer}
      >
        {glavred && activeHint && (
          <DrawerContent
            flexDirection="column"
            dangerouslySetInnerHTML={{
              __html: glavred?.hints[activeHint].description,
            }}
          />
        )}
      </Drawer>
      <Box
        marginTop="50px"
        maxWidth="700px"
        whiteSpace="break-spaces"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></Box>
    </LessonHeader>
  );
};

export default CheckComponent;
