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

const PRE_CODE = {
  javascript: "function runTest(){\n\n}",
  python: "function runTest(){\n}",
};

const CodeEditor: React.FC<EditorProps> = ({ id }) => {
  const [language, setLanguage] = useState("javascript");
  const [wrongCode, setWrongCode] = useState(false);
  const [syntaxError, setSyntaxError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [code, setCode] = useState("");
  const submitTest = () => {
    setLoading(true);
    setSyntaxError(false);
    setWrongCode(false);
    setSuccess(false);
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        id,
        language,
        script: code,
      }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) setSyntaxError(response.error);
        if (response.result == "False") setWrongCode(true);
        if (response.result == "True") setSuccess(true);
        setLoading(false);
      });
  };
 
  return (
    <Flex height="100%" flexDirection="column">
      <Box position="relative" flexGrow="222">
        <AceEditor
          defaultValue={PRE_CODE[language]}
          width="800px"
          height="100%"
          fontSize={16}
          mode={language}
          theme="solarized_dark"
          onChange={setCode}
          name={"CODE EDITOR"}
          editorProps={{ $blockScrolling: true }}
        />
        {success && (
          <Box zIndex="121" width="100%" padding="6px 20px" fontSize="12px" position="absolute" bottom="0" background="#27AE6080">
            Результат верный, можете перейти к след задаче
          </Box>
        )}
        {syntaxError && (
          <Box zIndex="121" width="100%" padding="6px 20px" fontSize="12px" position="absolute" bottom="0" background="#C8322766">
            {syntaxError}
          </Box>
        )}
        {wrongCode && (
          <Box zIndex="121" width="100%" padding="6px 20px" fontSize="12px" position="absolute" bottom="0" background="#C8322766">
            Результат неверный, проверьте ваше решение
          </Box>
        )}
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

        <Button isLoading={loading} onClick={submitTest} palette="primary">
          ТЕСТ
        </Button>
      </Flex>
    </Flex>
  );
};

export default CodeEditor;
