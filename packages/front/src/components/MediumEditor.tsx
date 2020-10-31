import React, { useEffect, useRef } from "react";

import MediumEditor from "medium-editor";
import styled from "styled-components";

import { Flex } from "bumbag";

const Editor = styled.div`
  outline: none;
  width: 620px;
  max-width: 620px;
  margin: auto;
  min-height: 400px;
`;

const emptyTemplate = `<h2>Главный заголовок</h2><p>Начните вводить описание</p>`;

export interface EditorProps {
  onChange: (data: any) => any;
  initialContent: string;
}

const OurMediumEditor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
}) => {
  const refEditor = useRef();
  useEffect(() => {
    refEditor.current = new MediumEditor(".editor", {
      toolbar: {
        buttons: [
          "image",
          "bold",
          "italic",
          {
            name: "h1",
            action: "append-h2",
            aria: "header type 1",
            tagNames: ["h2"],
            contentDefault: "<b>H1</b>",
            classList: ["custom-class-h1"],
            attrs: {
              "data-custom-attr": "attr-value-h1",
            },
          },
          {
            name: "h2",
            action: "append-h3",
            aria: "header type 2",
            tagNames: ["h3"],
            contentDefault: "<b>H2</b>",
            classList: ["custom-class-h2"],
            attrs: {
              "data-custom-attr": "attr-value-h2",
            },
          },
          "justifyCenter",
          "quote",
          "anchor",
        ],
      },
    });
    refEditor.current.subscribe("editableInput", (e, el) => {
      onChange(el.innerHTML);
    });
  }, []);
  return (
    <Flex flexDirection="column">
      <Editor
        className="editor"
        dangerouslySetInnerHTML={{ __html: initialContent || emptyTemplate }}
      />
    </Flex>
  );
};

export default OurMediumEditor;
