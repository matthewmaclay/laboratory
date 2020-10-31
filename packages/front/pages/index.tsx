import React, { useContext } from "react";
import style from "styled-components";
import Link from "next/link";
import WithSideBar from "components/layout/WithSideBar";
import { UserContext } from "components/providers/UserProvider";
import IndexTeacherPage from "components/pages/teacher";
import IndexStudentPage from "components/pages/student";

const Index = () => {
  const user = useContext(UserContext);
  if (!user) return null;
  if (user.teacher) return <IndexTeacherPage />;
  return <IndexStudentPage />;
};

export default Index;
