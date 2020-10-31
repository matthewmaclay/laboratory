import React from "react";
import dynamic from "next/dynamic";
import { EditorProps } from "./CodeEditor";
const CodeEditor = dynamic(() => import("./CodeEditor"), { ssr: false });

const Editor: React.FC<EditorProps> = (props) => {
  return <CodeEditor  {...props} />;
};

export default Editor;
