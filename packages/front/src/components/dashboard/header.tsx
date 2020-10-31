import React, { useState } from "react";
import style from 'styled-components';
import { Button } from 'bumbag';
import Link from "next/link";

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 2px solid #4E5868;

    .name.selected {
        color: #5454E2;
    }
`

const StyledInput = style.div`
    margin: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;      
    color: #E0E4EA;
    cursor: pointer;
`

const StyledBlockStatus = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledBlockButton = style.div`

`

const  EditorHeader = ({ fun }) => {

    const [choseType, setType] = useState();

    function choseTypeReq(name) {
        setType(name)
    }

    function handleClick(type: string) {
        fun(type)
    }
    return(
        <StyledLessonHeader>
            <StyledBlockStatus> 
                <StyledInput 
                    className={`name ${choseType == 'Task' ? "selected" : ""}`}
                    onClick={() => {
                    choseTypeReq('Task')
                    handleClick('Task')
                    }}>
                    Задания
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Stady' ? "selected" : ""}`}
                    onClick={() => {
                        choseTypeReq('Stady')
                        handleClick('Stady')
                    }}>
                    Ученики
                </StyledInput>
            </StyledBlockStatus>
            <Link href='/author'>  
                <StyledBlockButton>
                    <Button variant="ghost" color="#E0E4EA">
                        Пригласить
                    </Button>
                    <Button palette="primary">
                        + Создать задание
                    </Button>
                </StyledBlockButton>
            </Link>
        </StyledLessonHeader>
    )
}

export default EditorHeader;