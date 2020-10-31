import React, { useState } from "react";
import { Select, SelectField } from "bumbag";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import { Flex, Button, Box } from "bumbag";

export interface EditorProps {}

const CodeEditor: React.FC<EditorProps> = (props) => {
  const [language, setLanguage] = useState("javascript");
  console.log(language);
  return (
    <Flex height="100%" flexDirection="column">
      <Box flexGrow="222">
        <AceEditor
        //   defaultValue={props.content}
          width="800px"
          height="100%"
          mode={language}
          theme="solarized_dark"
        //   onChange={props.onChange}
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
        <Button palette="primary">ТЕСТ</Button>
      </Flex>
    </Flex>
  );
};

export default CodeEditor;
