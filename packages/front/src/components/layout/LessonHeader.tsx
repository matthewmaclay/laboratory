import React from "react";
import { PageWithHeader, TopNav, Button, Image, Box, Text } from "bumbag";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Flex } from "bumbag";
import { Icon } from "bumbag";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Enum_Lesson_Status,
  useGetLessonQuery,
  useUpdateLessonStatusMutation,
} from "graphqlTypes";

const HeaderLink = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  ${({ active }) => {
    if (!active) return "opacity: 0.6;";
  }}
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledPageWithHeader = styled(PageWithHeader)`
  display: flex;
  flex-direction: column;

  & > .bb-PageWithHeaderContent {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > .bb-Box {
      flex-grow: 1;
    }
  }
`;

const LINKS = [
  {
    name: "ТЗ",
    path: "/author/lesson/[id]/description",
  },
  {
    name: "Материал",
    path: "/author/lesson/[id]/description",
  },
  {
    name: "Цели",
    path: "/author/lesson/[id]/targets",
  },
  {
    name: "Нагрузка на ученика",
    path: "/author/lesson/[id]/load",
  },
  {
    name: "Опросы и задания",
    path: "/author/lesson/[id]/quiz",
  },
  {
    name: "Авторедактура",
    path: "/author/lesson/[id]/check",
  },
  // {
  //   name: "Результат",
  //   path: "/author/lesson/[id]/result",
  // },
];

const LINKS_EDITOR = [
  {
    name: "ТЗ",
    path: "/editor/lesson/[id]/description",
  },
  {
    name: "Материал",
    path: "/editor/lesson/[id]/description",
  },
  {
    name: "Цели",
    path: "/editor/lesson/[id]/targets",
  },
  {
    name: "Нагрузка на ученика",
    path: "/editor/lesson/[id]/load",
  },
  {
    name: "Опросы и задания",
    path: "/editor/lesson/[id]/quiz",
  },
  {
    name: "Авторедактура",
    path: "/editor/lesson/[id]/check",
  },
  // {
  //   name: "Результат",
  //   path: "/editor/lesson/[id]/result",
  // },
];

interface Props {
  id?: string;
  activeTab: string;
  isEditor?: boolean;
}
const getPath = (path: string, id: string) => path.replace("[id]", id);
const LessonHeader: React.FC<Props> = ({ children, id, isEditor }) => {
  const router = useRouter();
  const [
    updateStatus,
    { data: dataMut, loading: loadingMut, error: errorMut },
  ] = useUpdateLessonStatusMutation();
  const { data, error, loading, fetchMore } = useGetLessonQuery({
    variables: { id },
    fetchPolicy: "network-only",
  });
  React.useEffect(() => {
    if (dataMut) fetchMore({});
  }, [dataMut]);
  const disableButton = data?.lesson.status === Enum_Lesson_Status["Check"];
  const buttonText = disableButton
    ? "Отправлено в редактуру"
    : "Отправить в редактуру";
  return (
    <StyledPageWithHeader
      headerHeight="72px"
      header={
        <Flex
          boxShadow="0px 4px 24px rgba(0, 0, 0, 0.12)"
          flexDirection="column"
        >
          <Flex
            paddingLeft="56px"
            borderBottom="1px solid #F2F2F2"
            height="27px"
          >
            {" "}
            <Link href="/author">
              <BackButton>
                <div>
                  <Icon
                    marginRight="10px"
                    aria-label="Settings"
                    icon={faArrowLeft}
                    type="font-awesome"
                  />
                  Все уроки
                </div>
              </BackButton>
            </Link>
          </Flex>
          <TopNav paddingLeft="56px" minHeight="44px" height="44px">
            <TopNav.Section>
              {(isEditor ? LINKS_EDITOR : LINKS).map((i) => (
                <TopNav.Item marginRight="32px">
                  <HeaderLink active={i.path === router.pathname}>
                    <Link href={getPath(i.path, id)}>{i.name}</Link>
                  </HeaderLink>
                </TopNav.Item>
              ))}
            </TopNav.Section>
            <TopNav.Section>
              {isEditor ? (
                <>
                  <TopNav.Item>
                    <Button marginRight="16px" size="small">
                      Пригласить
                    </Button>
                  </TopNav.Item>
                  {data?.lesson.status === Enum_Lesson_Status["Check"] && (
                    <>
                      {" "}
                      <TopNav.Item>
                        <Button
                          onClick={() =>
                            updateStatus({
                              variables: {
                                id,
                                status: Enum_Lesson_Status["Fix"],
                              },
                            })
                          }
                          marginRight="16px"
                          size="small"
                        >
                          Вернуть автору
                        </Button>
                      </TopNav.Item>
                      <TopNav.Item>
                        <Button
                          onClick={() =>
                            updateStatus({
                              variables: {
                                id,
                                status: Enum_Lesson_Status["Complete"],
                              },
                            })
                          }
                          marginRight="60px"
                          size="small"
                          palette="primary"
                        >
                          Завершить редактуру
                        </Button>
                      </TopNav.Item>
                    </>
                  )}
                </>
              ) : (
                <>
                  <TopNav.Item>
                    <Button marginRight="16px" size="small">
                      Поделиться
                    </Button>
                  </TopNav.Item>
                  <TopNav.Item>
                    <Button
                      onClick={() => {
                        debugger
                        fetch("https://digitalscale.dokub.xyz/api/checkUnic", {
                          method: "POST",
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          data: JSON.stringify({ id:id }),
                        });
                        fetch(
                          "https://digitalscale.dokub.xyz/api/textReadability",
                          {
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            method: "POST",
                            data: JSON.stringify({ id }),
                          }
                        );
                        fetch(
                          "https://digitalscale.dokub.xyz/api/textPlagiat",
                          {
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            method: "POST",
                            data: JSON.stringify({ id }),
                          }
                        );
                      }}
                      marginRight="16px"
                      size="small"
                    >
                      Запустить автопроверку
                    </Button>
                  </TopNav.Item>
                  <TopNav.Item>
                    <Button
                      onClick={() =>
                        updateStatus({
                          variables: {
                            id,
                            status: Enum_Lesson_Status["Check"],
                          },
                        })
                      }
                      disabled={disableButton}
                      marginRight="60px"
                      size="small"
                      palette="primary"
                    >
                      {buttonText}
                    </Button>
                  </TopNav.Item>
                </>
              )}
            </TopNav.Section>
          </TopNav>
        </Flex>
      }
      border="default"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </StyledPageWithHeader>
  );
};
export default LessonHeader;
