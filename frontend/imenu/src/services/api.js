import axios from 'axios';
import { response } from 'express';
const dotenv = require('dotenv').config();


// API Key - para conectar ao MongoDB
// const API_URI = process.env.API_URI;
const API_URI = 'http://localhost:3000' // <- Use este


export async function getFunction() {

    const [name, setName] = useState('')
    const [price,setPrice] = useState('')
    const [ingredients,setIngredients] = useState('')
    
    const response = await axios({
        method: "GET",
        url: `${API_URI}/api/findAllItems`
    })
    .then((response) => {
        console.log(response.data)
        setName(response.data)
    })
    

    return;
}

export async function postFunction() {

    const [name, setName] = useState('')
    const [price,setPrice] = useState('')
    const [ingredients,setIngredients] = useState({})

    const reponse = await axios({
        method: "POST",
        url: `${API_URI}/api/createItem`,
        name: name, 
        price: price,
        ingredients: ingredients
    })
    .then((response) => {
        console.log(response.data)
        setName(response.name)
        setPrice(response.price)
        setIngredients(response.ingredients)
    })
    

    return response;
}

