import React, { useState } from "react";
import style from 'styled-components';
import { Button } from 'bumbag';
import Link from "next/link";

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #E0E0E0;

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
    color: #333333;
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
    console.log(`name ${name == 'Check' ? "selected" : ""}`)

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
                    className={`name ${choseType == 'All' ? "selected" : ""}`}
                    onClick={() => {
                    choseTypeReq('All')
                    handleClick('')
                    }}>
                    Все
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Check' ? "selected" : ""}`}
                    onClick={() => {
                        choseTypeReq('Check')
                        handleClick('Check')
                    }}>
                    На корректуре
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Fix' ? "selected" : ""}`}
                    onClick={() => { 
                        choseTypeReq('Fix')
                        handleClick('Fix')
                    }}>
                    Доработка автору
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Fix' ? "selected" : ""}`}
                    onClick={() => { 
                        choseTypeReq('Complete')
                        handleClick('Complete')
                    }}>
                    Проверено
                </StyledInput>
            </StyledBlockStatus>
            <Link href='/author'>  
                <StyledBlockButton>
                    <Button palette="primary">
                        + Создать
                    </Button>
                </StyledBlockButton>
            </Link>
        </StyledLessonHeader>
    )
}

export default EditorHeader;