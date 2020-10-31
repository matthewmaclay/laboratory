import React, {useState} from 'react';
import style from 'styled-components';
import { Table, Button, CheckboxField } from 'bumbag';

const StyledVariableTable = style.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 700px;

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
`

const GenerateTable = (props) => {

  const [currentVariables, setVariables] = useState({
    Head: ['String'],
    row1: [false, '']
  });

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
    <StyledVariableTable>
      <FirstTable>
        <Table className="addAnswers" isResponsive >
            <Table.Head>
              <Table.Row background="#171C26">
                <Table.HeadCell color="#E0E4EA">Видимость для ученика</Table.HeadCell>
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
                            <input className='bodyTable' type="text" name={`${i + 1},${k}`} onChange={addInfo} >
                            </input>
                          </Table.Cell>
                        )
                      })}
                      <Table.Cell padding="0">
                        <input className='bodyTable' type="text" name={`${i}`} onChange={addResult} >
                        </input>
                      </Table.Cell>
                    </Table.Row>
                  )
                }
              })
              }
            </Table.Body>
        </Table>
        <Button size="small" className="bottonAdd variable" onClick={addNewVariables}>
                +
        </ Button>
      </FirstTable>
      <Button size="small" className="bottonAdd" onClick={addNewRows} > 
            +
      </Button>
    </StyledVariableTable>
  )
};

const TableTest = () => {
    return(
      <div>
        <GenerateTable />
      </div>
    )
};

export default TableTest;