import React, { useState } from "react";
import style from 'styled-components';
import Link from "next/link";
import EditorHeader from './header';
import { Table } from 'bumbag'

import { Flex, Box } from "bumbag";

const StyledCourseList = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
`

const StyledHeader = style.div`
	width: 80%;
	margin-top: 47px;
`

const StyledCars = style.div`
	margin-top: 64px;
	width: 80%;
	cursor: pointer;

	.Card {
		border: 1px solid #CBCFD3;
	}
	
	.Card:hover {
		background: #FCFCFD;
		box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
	}
`

const StyledLinks = style.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	margin: 35px 62px 70px 13px;

	color: #FFFFFF;
`

const StyledStatus = style.div`
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	color: #FFFFFF;
	margin-left: 13px;

	data {
		color: #27AE60
	}
`

const StyledSeparator = style.div`
	height: 33px;
`

const StyledTable = style.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const mock = {
	lessons: [
		{
			id: 1,
			title:'Задание 21',
			time: '17 октября'
		},
		{
			id: 1,
			title:'Задание 22',
			time: '17 октября'
		},
		{
			id: 1,
			title:'Задание 23',
			time: '17 октября'
		},
		{
			id: 1,
			title:'Задание 24',
			time: '17 октября'
		},
		{
			id: 1,
			title:'Задание 25',
			time: '17 октября'
		}
	],
	stady: [
		{ name: 'Иван Иванов', point: '89' },
		{ name: 'Иван Петров', point: '25' },
		{ name: 'Иван Курочкин', point: '67' },
		{ name: 'Иван Муравьёв', point: '47' }
	]
}

export default function CourseList() {
	const [choseType, setType] = useState("Task");

	function handleClick(type: string) {
		setType(type)
	}

	if(choseType == 'Task') {
		return (
			<StyledCourseList>
				<StyledHeader>
					<EditorHeader fun={handleClick}/>
				</StyledHeader>
				<StyledCars >
					<Flex flexDirection="row" flexWrap="wrap">
						{mock.lessons.map((i) => (
							<Link href={`/author/lesson/${i.id}/description`}>
								<Box width="240px" 
									height="196px" 
									margin="23px" 
									background="#617083"
									box-shadow="1px 2px 24px rgba(0, 0, 0, 0.12)"
									borderRadius="8px"
									className="Card"
								>
										<>
											<StyledLinks>
												{i.title}
											</StyledLinks>
											<StyledStatus>
												Завершить <data>{i.time}</data>		
											</StyledStatus>
										</>
								</Box>
							</Link>
						))}
					</Flex>
				</StyledCars>
			</StyledCourseList>
		);
	}
	if(choseType == 'Stady') { 
		return(
			<StyledCourseList>
				<StyledHeader>
					<EditorHeader fun={handleClick}/>
				</StyledHeader>
				<StyledSeparator />
				<StyledTable>
					<Table width="80%" color="#E0E4EA" isHoverable>
						<Table.Head background="#171C26">
							<Table.Row>
								<Table.HeadCell color="#E0E4EA">Имя ученика</Table.HeadCell>
								<Table.HeadCell textAlign="right" color="#E0E4EA">Средний балл</Table.HeadCell>
							</Table.Row>
						</Table.Head>
						<Table.Body color="#E0E4EA">
							{mock.stady.map(item=> {
								return(
									<Table.Row>
										<Table.Cell>{item.name}</Table.Cell>
										<Table.Cell textAlign="right">{item.point}</Table.Cell>
									</Table.Row>
								)})}
						</Table.Body>
					</Table>
				</StyledTable>
			</StyledCourseList>
		)
	}
}
