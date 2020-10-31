import React from "react";
import style from "styled-components";
import Link from "next/link";
import WithSideBar from "components/layout/WithSideBar";

const IndexSidebar:React.FC = ({children}) => {
  return (
    <WithSideBar
      header={<>dasdasdas</>}
      lastBlock={<div>lastbloc</div>}
      blocks={[<div>1</div>, <div>2</div>, <div>3</div>]}
    >
      {children}
    </WithSideBar>
  );
};

export default IndexSidebar:R;
