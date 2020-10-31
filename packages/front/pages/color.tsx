import React from 'react';
import style from 'styled-components';
import Link from "next/link";
import { Stack, useColorMode, Text,Set, Button } from 'bumbag';


const CourseList = () => {
    const { colorMode, setColorMode } = useColorMode();
  
    return (
      <Stack>
        <Text>Current mode: {colorMode}</Text>
        <Set>
          <Button onClick={() => setColorMode('default')}>Light</Button>
          <Button onClick={() => setColorMode('dark')}>Dark</Button>
        </Set>
      </Stack>
    )
}

export default CourseList;

