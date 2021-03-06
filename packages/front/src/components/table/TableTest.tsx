import React, {useState} from 'react';
import style from 'styled-components';
import { Table, Button, Box } from 'bumbag';

const StyledVariableTable = style.div`
    display: flex;
    flex-direction: column;
 
    justify-content: start;


    input {
		height: 40px;
		border: none;
		outline: none;
		background: #171C26;

		vertical-align: middle;
		color: #E0E4EA;
		font-weight: 600;
		font-size: 0.75rem;
		text-transform: uppercase;

		text-align: center;
    }

    input:hover {
      	background: #171C26;
    }

    .bodyTable {
      	background: none;
    }

    .bottonAdd {
		width: 100px;
		height: 30px;
    }
    .addAnswers {
      	margin-top: 0px;
    }
`

const FirstTable = style.div`
	display: flex;
	align-items: center;
	padding-left:5px;
`


const GenerateTable = ( props?: any ) => {
	function generateState (mock) {
		const result = {};
		const Head = [];
		mock[0]?.args.forEach(item => {
			Head.push(item.title)
		});
		result['Head'] = Head;
		mock.map((item, i) => {
			const row = [];
			row.push(item.open);
			item.args.forEach(itemArg => {
				row.push(itemArg.value);
			});
			row.push(item.result);
			result[`row${i + 1}`] = row
		});
		return result;
	};

	let initialState;

	console.log(props)

	if(typeof props.mock == 'undefined') {
		initialState = {
			Head: ['String'],
			row1: [false, '']
		}
	} else {
		initialState =  generateState(props.mock)
	}

	const [currentVariables, setVariables] = useState(initialState);
	React.useEffect(()=>props.onChange(generateToJson(currentVariables)),[currentVariables])
	React.useEffect(()=>{
		if(props.mock) setVariables(generateState(props.mock))
	},[props.mock])
	function generateToJson(state) {
		const result = [];
		const allTitle = []
		allTitle.push('open');
		state.Head.map(item => {
			allTitle.push(item);
		});
		allTitle.push('result');
		Object.keys(state).forEach((item,i) => {
			if(i > 0) {
				const oneSpar = {};
				oneSpar["open"] = state[`row${i}`][0];
				oneSpar['result'] = state[`row${i}`][state[`row${i}`].length - 1];

				const asrsArray = [];
				allTitle.forEach((element, k) => {
					if(k > 0 && k < state[`row${i}`].length - 1) {
						const argsObject = {};
						argsObject['id'] = k;
						argsObject['title'] = element;
						argsObject['value'] = state[`row${i}`][k]
						asrsArray.push(argsObject);
					}
				});
				oneSpar['args'] = asrsArray;
				result.push(oneSpar);
			}
		});
		return { tests: result } ;
	}

    function addNewVariables() {
        const head = currentVariables.Head;
        head.push('');
        setVariables(
            {
              ...currentVariables,
              Head: head
            }
        )
    }

	function addNewRows() {
		const row = Object.keys(currentVariables).length;
		setVariables({
			...currentVariables, 
			[`row${row}`]: []
		});
	}

	function сhange(event) {
		const target = event.target;
		const value =  target.value;
		const name = target.name;
		const head = currentVariables.Head;
		head[name] = value;
		setVariables({
			...currentVariables, 
			Head: head
		});
	}

	function addInfo(event) {
		const target = event.target;
		const value =  target.value;
		const name = target.name;
		const typeString = name.split(',');
		const rowValue = currentVariables[`row${typeString[0]}`];
		rowValue[+typeString[1] + 1] = value;
		setVariables({
			...currentVariables, 
			[`row${typeString[0]}`]: rowValue
		});
	}

	function addResult(event) {
		const target = event.target;
		const value =  target.value;
		const name = target.name;
		const rowValue = currentVariables[`row${+name + 1}`];
		const index = currentVariables.Head.length + 1;
		console.log(index)
		rowValue[index] = value;
		setVariables({
			...currentVariables, 
			[`row${+name + 1}`]: rowValue
		});
	}

  function choseRule(e) {
		const status = e.target.checked;
		const name = e.target.name;
		const rowValue = currentVariables[`row${+name + 1}`];
		rowValue[0] = status;
		setVariables({
			...currentVariables, 
			[`row${+name + 1}`]: rowValue
		});
	}
	  
	return(
		<Box>

		
		<StyledVariableTable>
			
		<FirstTable>
			<Table className="addAnswers" isResponsive >
				<Table.Head>
				<Table.Row background="#171C26">
					<Table.HeadCell fontSize="10px" color="#E0E4EA">Видимость для ученика</Table.HeadCell>
					{currentVariables.Head.map((item, i) => {
					return(
						<Table.HeadCell key={i} padding="0">
						<input type="text" value={currentVariables.Head[i]} name={`${i}`} onChange={сhange}>
						</input>
						</Table.HeadCell>
					)
					})}
					<Table.HeadCell color="#E0E4EA">Результат</Table.HeadCell>
				</Table.Row>
				</Table.Head>
				<Table.Body>
				{Object.keys(currentVariables).map((item, i) => {
					if(i < Object.keys(currentVariables).length - 1) {
					return (
						<Table.Row>  
						<Table.Cell padding="0" display="flex" justifyContent="center" alignContent="center">
							<input type="checkbox" name={`${i}`} checked={currentVariables[`row${i + 1}`][0]} onChange={choseRule}/>
						</Table.Cell>
						{currentVariables.Head.map((item, k) => {
							return(
							<Table.Cell padding="0">
								<input value={currentVariables[`row${i + 1}`][k + 1]} className='bodyTable' type="text" name={`${i + 1},${k}`} onChange={addInfo} >
								</input>
							</Table.Cell>
							)
						})}
						<Table.Cell padding="0">
							<input value={currentVariables[`row${i + 1}`][currentVariables[`row${i + 1}`].length - 1]} className='bodyTable' type="text" name={`${i}`} onChange={addResult} >
							</input>
						</Table.Cell>
						</Table.Row>
					)
					}
				})
				}
				</Table.Body>
			</Table>
			<Button marginLeft="10px" width="40px" height="40px"  size="small" className="bottonAdd variable" onClick={addNewVariables}>
					+
			</ Button>
		</FirstTable>
		<Button alignSelf="center" marginTop="10px" width="40px" height="40px"  size="small" className="bottonAdd" onClick={addNewRows} > 
				+
		</Button>
		</StyledVariableTable>
		</Box>
	)
};

export default GenerateTable;