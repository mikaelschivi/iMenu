import axios from 'axios';
import { response } from 'express';
const dotenv = require('dotenv').config();


// API Key - para conectar ao MongoDB
// const API_URI = process.env.API_URI;
const API_URI = 'http://localhost:30000/' // <- Use este


export async function getFunction() {

    const [name, setName] = useState('')

    const response = await axios({
        method: "GET",
        url: `${API_URI}/api/findItemById/6512e1ed8d84c4bd0803826c`
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
        url: `${API_URI}/api/createItem`
    })
    .then((response) => {
        console.log(response.data)
        setName(response.data)
    })
    

    return;
}

