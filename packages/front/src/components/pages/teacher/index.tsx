import React, { useContext } from "react";
import style from "styled-components";
import Link from "next/link";
import WithSideBar from "components/layout/WithSideBar";
import { useGetGroupsWhereIamTeacherQuery } from "graphqlTypes";
import { UserContext } from "components/providers/UserProvider";

const IndexTeacherPage:React.FC = ({children}) => {
    const { teacher } = useContext(UserContext);
   const {data, error, loading}= useGetGroupsWhereIamTeacherQuery()
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


export default IndexTeacherPage;