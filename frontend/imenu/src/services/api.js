import axios from 'axios';
import { response } from 'express';

const CONNECTION_STRING = process.env.CONNECTION_STRING;



export async function getFunction() {

    const [name, setName] = useState('')

    const response = await axios({
        method: "GET",
        url: `${CONNECTION_STRING}/api/findItemById/6512e1ed8d84c4bd0803826c`
    })
    .then((response) => {
        console.log(response.data)
        setName(response.data)
    })
    

    return;
}

export async function postFunction() {

    const [name, setName] = useState('')

    const reponse = await axios({
        method: "POST",
        url: `${CONNECTION_STRING}/api/createItem`
    })
    .then((response) => {
        console.log(response.data)
        setName(response.data)
    })
    

    return;
}

