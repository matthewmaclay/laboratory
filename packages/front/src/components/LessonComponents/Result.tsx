import React, { useState } from "react";
import style from "styled-components";
import { Button, Flex, Heading } from "bumbag";
import LessonHeader from "components/layout/LessonHeader";
import { useRouter } from "next/router";
import { useGetLessonQuery } from "graphqlTypes";
import { Spinner, Table } from "bumbag";

const StyledResultPage = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledHeaders = style.div`
    display: flex;
    justify-content: start;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
    margin-top: 68px;
    width: 40%;
`;

const StyledPercent = style.div`
    display: flex;
    justify-content: space-between;
    margin-top: 71px;
    height: 27px;
    width: 40%;

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .persent {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 36px;
        color: #E19F41;
    }
`;

const StyledStopWords = style.div`
    margin-top: 52px;
    width: 40%;

    .numberStopWords {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #000000;

        margin-bottom: 16px;
    }

    .arrayStopWords {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        background: rgba(146, 79, 209, 0.1);
        border-radius: 4px;
        padding: 23px 21px 32px 20px
    }
`;

const StyledReplace = style.div`
    position: relative;
    height: 1px;
    width: 40%;
    background: #E0E0E0;
    margin-top: 40px;
`;

const StyledReplaceToo = style.div`
    position: relative;
    height: 1px;
    width: 40%;
    background: #E0E0E0;
    margin-top: 58px;
`;

const StyledReadability = style.div`
    display: flex;
    justify-content: space-between;
    margin-top: 59px;
    height: 27px;
    width: 40%;

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .status {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color: #27AE60;
    }
`;
const StyledTasks = style.div`
    margin-top: 73px;   
    width: 40%;

    .body {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .status {
        border-radius: 50%;
        width: 48px;
        height: 49px;
        background: #27AE60;
        opacity: 0.16;
    }

    .moreInfo {
        margin-top: 64px;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #000000;
    }
`;

const StyledFieldUnic = style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 71px;
    width: 40%;

    .mainInfo {
        display: flex;
        justify-content: space-between;
    }
    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .persent {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 36px;
        color: #E19F41;
    }

    .moreInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 23px 0px 21px 0px;
        margin-top: 48px;

        background: rgba(0, 111, 255, 0.1);
        border: 1px solid rgba(0, 111, 255, 0.4);
        border-radius: 4px;
    }

    .link {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .borrowing {
        margin: 0px 26px 0px 2px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #27AE60;
    }
`;

const StyledValidLinks = style.div`
    display: flex;
    flex-direction: column;
    align-content: start;
    justify-content: start;
    margin-top: 59px;
    width: 40%;

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: rgba(200, 50, 39, 0.7);
    }

    button {
        margin-top: 23px;
    }

    .topic {
        margin-top: 23px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #000000;
    }

    .notValidLinks{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        height: 117px;
        background: rgba(146, 79, 209, 0.1);
        border-radius: 4px;
    }

    .link {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #924FD1
    }
`;

const StyledButtonSend = style.div`
    margin-top: 48px;
    background: #5454E2;
    border-radius: 4px;
`;

const Percent = ({ persent }) => {
  return (
    <StyledPercent>
      <div className="text">Корректность текста</div>
      <div className="persent">{`${persent}%`}</div>
    </StyledPercent>
  );
};

const FieldStopWords = ({ stopWords }) => {
  const arrayWords = stopWords.words.join(", ");
  return (
    <StyledStopWords>
      <div className="numberStopWords">{`${stopWords.number} стоп-слов`}</div>
      <div className="arrayStopWords">{arrayWords}</div>
    </StyledStopWords>
  );
};

const Readability = (props) => {
  console.log(props);
  debugger;
  return (
    <>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
      <StyledReadability>
        <div className="text">Читабельность</div>
        <div className="status">{status}</div>
      </StyledReadability>
    </>
  );
};

const Tasks = ({ status }) => {
  return (
    <StyledTasks>
      <div className="body">
        <div className="text">{status.head}</div>
        <div className="status">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.16"
              d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
              fill="#27AE60"
            />
            <path
              d="M20.9782 27.1864L32.5361 17.7914C32.8575 17.5301 33.3298 17.5788 33.5911 17.9003C33.8305 18.1947 33.8122 18.6216 33.5485 18.8945L21.376 31.4932C21.0882 31.7911 20.6134 31.7993 20.3155 31.5115C20.298 31.4946 20.2814 31.4769 20.2656 31.4584L18.4073 29.2762L18.4126 29.2719L15.1933 25.4773C14.9253 25.1614 14.9641 24.6881 15.28 24.4202C15.5213 24.2154 15.8651 24.1842 16.1394 24.3421L20.8016 27.0262L20.9782 27.1864Z"
              fill="#27AE60"
              stroke="#27AE60"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      {status.text !== null && <div className="moreInfo">{status.text}</div>}
    </StyledTasks>
  );
};

const FieldUnic = ({ unic }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <StyledFieldUnic>
      <div className="mainInfo">
        <div className="text">Уникальность текста</div>
        <div className="persent">{`${unic.uniqueness}%`}</div>
      </div>
      <Button width="102px" size="small" onClick={handleClick}>
        Открыть
      </Button>
      {unic.coincidences.length > 0 &&
        open &&
        unic.coincidences.map((item, i) => (
          <div key={i} className="moreInfo">
            <div className="borrowing">{item.percent}%</div>
            <div className="link">{item.url}</div>
          </div>
        ))}
    </StyledFieldUnic>
  );
};

const ButtonSend = () => {
  return (
    <StyledButtonSend>
      <Button palette="primary">Отправить редактору</Button>
    </StyledButtonSend>
  );
};

const ValidLinks = ({ links }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <StyledValidLinks>
      <div className="text">Ссылки проверены</div>
      <Button width="102px" size="small" onClick={handleClick}>
        Открыть
      </Button>
      <div className="topic">{`Найдено ${links.result.length} подозрительных ссылки`}</div>
      {links.result.length > 0 &&
        open &&
        links.result.map((item, i) => {
          const link: string = Object.keys(item)[0];
          const words = item[link].join(", ");
          return (
            <div key={i} className="notValidLinks">
              <div className="link">{link}</div>
              <div className="words">{words}</div>
            </div>
          );
        })}
    </StyledValidLinks>
  );
};

const mock = {
  persent: {
    number: 73,
  },
  stopWords: {
    number: 11,
    words: [
      "неопределенность",
      "необъективная",
      "оценка",
      "личное",
      "местоимение",
      "канцеляризм",
      "обобщение",
    ],
  },
  readability: {
    status: "Высокая читабельность",
  },
  purposes: {
    status: true,
    head: "Опросы и задания",
    text: null,
  },
  questionnaire: {
    status: true,
    head: "Цели проставлены",
    text: "Кулинария, рецепт, приготовление, обучение",
  },
  tags: {
    status: true,
    head: "Ссылки проверены",
    text: null,
  },
  unic: {
    uniqueness: "9.9",
    coincidences: [
      {
        url:
          "https://pets.mail.ru/how-to/uhod-za-sherstyu-malenkih-pushistyih-sobak-toj-pud/",
        percent: "90.1",
        highlight: [
          ["0", "84"],
          ["86", "159"],
        ],
      },
    ],
  },
  links: {
    result: [
      {
        "https://pets.mail.ru/how-to/uhod-za-sherstyu-malenkih-pushistyih-sobak-toj-pud?from=smartlenta": [
          "терьеров",
        ],
      },
    ],
  },
};

const ResultPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });
  if (loading)
    return (
      <LessonHeader id={id}>
        <Spinner />
      </LessonHeader>
    );
  if (!data?.lesson.uniq)
    return (
      <LessonHeader id={id}>
        <Heading use="h5">
          Для просмотра данный страницы запросите автоматическую проверку статьи
        </Heading>
        <Spinner size="large" />
      </LessonHeader>
    );

  return (
    <LessonHeader id={id}>
      <StyledResultPage>
        <StyledHeaders>Общая проверка материала</StyledHeaders>
        <Percent persent={mock.persent.number} />
        <StyledReplace />
        {data?.lesson?.readability && (
          <Readability {...data.lesson.readability} />
        )}
        <StyledReplaceToo />
        {data.lesson.uniq && <FieldUnic unic={data.lesson.uniq} />}
        <StyledReplaceToo />
        <Tasks status={mock.purposes} />
        <StyledReplaceToo />
        <Tasks status={mock.questionnaire} />
        <StyledReplaceToo />
        {data.lesson.links && <ValidLinks links={data.lesson.links} />}
        <StyledReplaceToo />
        <ButtonSend />
      </StyledResultPage>
    </LessonHeader>
  );
};

export default ResultPage;
