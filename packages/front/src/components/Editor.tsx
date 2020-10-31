import React from "react";
import dynamic from "next/dynamic";
import { EditorProps } from "./MediumEditor";
const MediumEditor = dynamic(() => import("./MediumEditor"), { ssr: false });

const Editor: React.FC<EditorProps> = (props) => {
  return <MediumEditor  {...props} />;
};

export default Editor;
