import React from 'react';
import { Table } from 'bumbag';

const Drawing = ({ data }) => {
    const validHeader = data[0].args.map(item => item.title);
    return(
        <Table isHoverable>
            <Table.Head>
                <Table.Row>
                    {validHeader.map(item => {
                        return(
                            <Table.HeadCell>{item}</Table.HeadCell>
                        )
                    })}
                    <Table.HeadCell textAlign="right">Результат</Table.HeadCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {data.map((item,i) => {
                    return(
                        <Table.Row>
                            {console.log('item', item)}
                            {item.open == true && item.args.map(item => {
                                return(
                                    <Table.Cell>{item.value}</Table.Cell>
                                )
                            })}
                            {item.open == true && <Table.Cell textAlign="right">{item.result}</Table.Cell>}
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
};

export default Drawing;