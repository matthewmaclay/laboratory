import React from "react";
import MakeComments from "components/LessonComponents/MakeComments";
import styled from "styled-components";

const Wrapper = styled.div`
 blockquote{
    border-left: 5px solid #574feb;
    padding-left: 20px;
 }
`


const CustomStyleForEditor = (props) => <Wrapper>{props.children}</Wrapper>;
export default CustomStyleForEditor;
