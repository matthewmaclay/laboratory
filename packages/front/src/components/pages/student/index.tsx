import React, { useContext, useEffect, useState } from "react";
import { Modal, Card, Button, Box, Link, Heading, InputField } from "bumbag";

import WithSideBar from "components/layout/WithSideBar";
import {
  useCreateGroupMutation,
    useGetGroupsWhereIamStudentQuery,
  useGetGroupsWhereIamTeacherQuery,
  useGetStudentsQuery,
  useGetTasksByGroupIdQuery,
} from "graphqlTypes";
import { UserContext } from "components/providers/UserProvider";
import AvatarWithName from "components/AvatarWithName";
import { Spinner, Flex, SelectMenu } from "bumbag";
import styled from "styled-components";
import CourseList from '../../dashboard/index';

const SelectWrapper = styled.div`
  & .bb-SelectMenuItem[aria-selected="true"] {
    background-color: #0e0d25 !important;
    color: white !important;
  }
`;

const IndexTeacherPage: React.FC = ({ children }) => {
  const IAM = useContext(UserContext);
  const [activeGroup, setActiveGroup] = useState<{
    id?: string;
    title?: string;
  }>({});
  const [students, setStudents] = React.useState();
  const [titleNewGroup, setTitleNewGroup] = React.useState("");
  const { teacher, avatar, firstName, id } = useContext(UserContext);
  const { data: dataTasks } = useGetTasksByGroupIdQuery({
    variables: { groupId: activeGroup.id || "notId" },
    fetchPolicy:"network-only"
  });
  const {
    data,
    error,
    loading,
    refetch: refetchGroups,
  } = useGetGroupsWhereIamStudentQuery({
    variables: { id },
  });
  const [createGroup] = useCreateGroupMutation({
    onCompleted: () => {
      refetchGroups();
      setTitleNewGroup("");
      setStudents(null);
    },
  });
  useEffect(() => {
    data && data.groups.length &&  setActiveGroup(data.groups[0]);
  }, [data]);
 
  return (
    <WithSideBar
      header={<>{activeGroup?.title || "Выберите группу"}</>}
      blocks={[
        <AvatarWithName img={avatar} name={`${firstName}`} />,
        <div>
          <Link>Банк заданий</Link>
        </div>,
        <div>
          {!data ? (
            <Spinner size="large" />
          ) : (
            <Flex marginTop="40px" flexDirection="column">
              {!!data.groups.length &&
                data.groups.map((i) => (
                  <Link
                    onClick={() =>
                      setActiveGroup({
                        id: i.id,
                        title: i?.title || "Название не задано",
                      })
                    }
                    marginBottom="24px"
                    color={activeGroup?.id == i.id ? "white" : "#8883F1"}
                  >
                    {i.title}
                  </Link>
                ))}
            </Flex>
          )}
        </div>,
      ]}
    >
      <Box width="100%">
        <CourseList isStudent activeGroupId={activeGroup.id} dataTasks={dataTasks}/>
      </Box>
    </WithSideBar>
  );
};

export default IndexTeacherPage;
