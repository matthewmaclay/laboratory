import React, { useState } from "react";
import { Select, SelectField } from "bumbag";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import { Flex, Button, Box } from "bumbag";

export interface EditorProps {
    id: string;
}

const URL = "/run-test";

const CodeEditor: React.FC<EditorProps> = ({id}) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const submitTest = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        id,
        language,
        script: code,
      }),
    });
  };
  return (
    <Flex height="100%" flexDirection="column">
      <Box flexGrow="222">
        <AceEditor
          //   defaultValue={props.content}
          width="800px"
          height="100%"
          fontSize={16}
          mode={language}
          theme="solarized_dark"
          onChange={setCode}
          name={"CODE EDITOR"}
          editorProps={{ $blockScrolling: true }}
        />
      </Box>

      <Flex justifyContent="space-between" flexShrink="2" padding="18px 31px">
        <Select
          options={[
            { label: "javascript", value: "javascript" },
            { label: "python", value: "python" },
          ]}
          onChange={({ target }) => setLanguage(target.value)}
          value={language}
        />
        <Button onClick={submitTest} palette="primary">
          ТЕСТ
        </Button>
      </Flex>
    </Flex>
  );
};

export default CodeEditor;
