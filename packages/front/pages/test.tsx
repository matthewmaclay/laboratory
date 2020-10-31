import GenerateTable from '../src/components/table/TableTest';

const mock = [
    {
        "id":1,
        "open":true,
        "language":null,
        "result":"happyp",
        "args":[
            {
                "id":1,
                "title": "string",
                "value":"happy"
            },
            {
                "id":2,
                "title": "bool",
                "value":"p"
            }
        ]
    },
    {
        "id":2,
        "open":false,
        "language":null,
        "result":"happyp",
        "args":[
            {
                "id":1,
                "title": "string",
                "value":"happy"
            },
            {
                "id":2,
                "title": "bool",
                "value":"p"
            }
        ]
    },
    {
        "id":3,
        "open":false,
        "language":null,
        "result":"4",
        "args":[
            {
                "id":1,
                "title": "string",
                "value":"lololololo"
            },
            {
                "id":2,
                "title": "bool",
                "value":"0"
            }
        ]
    }
]

const Test = () => {
    return(
        <GenerateTable />
    )
};

export default Test;