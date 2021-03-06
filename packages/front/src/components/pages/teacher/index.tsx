import React, { useContext, useEffect, useState } from "react";
import { Modal, Card, Button, Box, Link, Heading, InputField } from "bumbag";

import WithSideBar from "components/layout/WithSideBar";
import {
  useCreateGroupMutation,
  useGetGroupsWhereIamTeacherQuery,
  useGetStudentsQuery,
  useGetTasksByGroupIdQuery,
  useGetUsersByGroupIdQuery,
} from "graphqlTypes";
import { UserContext } from "components/providers/UserProvider";
import AvatarWithName from "components/AvatarWithName";
import { Spinner, Flex, SelectMenu } from "bumbag";
import styled from "styled-components";
import CourseList from "../../dashboard/index";
import ButtonLink from "components/ButtonLink";

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
  const { data: dataStudents } = useGetStudentsQuery();
  const { data: dataTasks } = useGetTasksByGroupIdQuery({
    variables: { groupId: activeGroup.id || "noid" },
    fetchPolicy: "network-only",
  });
  const {
    data,
    error,
    loading,
    refetch: refetchGroups,
  } = useGetGroupsWhereIamTeacherQuery({
    variables: { id },
  });
  const [createGroup] = useCreateGroupMutation({
    onCompleted: () => {
      refetchGroups();
      setTitleNewGroup("");
      setStudents(null);
    },
  });
  // юзеры тут
  const { data: dataUsers } = useGetUsersByGroupIdQuery({
    variables: {
      id: activeGroup.id || "notID",
    },
  });
  console.log(dataUsers, "datausers");
  useEffect(() => {
    data && setActiveGroup(data.groups[0] || {});
  }, [data]);
  console.log(dataTasks, activeGroup);
  return (
    <WithSideBar
      header={
        <Flex alignItems="center" width="100%" justifyContent="space-between">
          {activeGroup?.title || "Выберите группу"}
          <ButtonLink size="small" href="/signout">
            Выйти
          </ButtonLink>
        </Flex>
      }
      lastBlock={
        <Modal.State animated>
          <Modal.Disclosure use={Link}>+ Добавить группу</Modal.Disclosure>
          <Modal fade expand>
            <Card minWidth="816px" padding="42px 52px">
              <Heading marginBottom="32px" use="h5">
                Новая группа
              </Heading>
              <InputField
                placeholder="Название группы"
                marginBottom="20px"
                size="medium"
                type="text"
                onChange={({ target }) => setTitleNewGroup(target.value)}
                value={titleNewGroup}
              ></InputField>

              <SelectWrapper>
                <SelectMenu
                  hasSearch
                  isMultiSelect
                  onChange={setStudents}
                  options={dataStudents?.users.map((i) => ({
                    key: i.id,
                    label: i.lastName + " " + i.firstName,
                    value: i.id,
                  }))}
                  placeholder="Выберите учеников"
                  value={students}
                />
              </SelectWrapper>

              <Modal.Disclosure use={Box}>
                <Button
                disabled={!titleNewGroup || !students?.length}
                  onClick={() =>
                    createGroup({
                      variables: {
                        title: titleNewGroup,
                        teacherId: IAM.id,
                        students: students?.map((i) => i.value) || [],
                      },
                    })
                  }
                  palette="primary"
                  size="medium"
                >
                  Создать группу
                </Button>
              </Modal.Disclosure>
            </Card>
          </Modal>
        </Modal.State>
      }
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
        <CourseList
          activeGroupId={activeGroup.id}
          dataTasks={dataTasks}
          dataUsers={dataUsers}
        />
      </Box>
    </WithSideBar>
  );
};

export default IndexTeacherPage;
