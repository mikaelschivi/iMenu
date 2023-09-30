import React from "react";
import { View, Text, TextInput} from "react-native";
import { useState, useEffect } from "react";

export default function Admin() {


    const [itens, setItens] = useState([])

    // useEffect( () => {
    //     //Descrevendo qual rota 
    //     api.get('/').then( (response) => {
    //       console.log(response.data)
      
    //       //armazena os dados do back
    //       setItens(response.data)  
    //     }) 
    //   }, [])

    // const [itens, setItens] = useState([])
    // const [amount, setAmount] = useState([])
  
    // useEffect( () => {
    //   //Descrevendo qual rota 
    //   api.get('/item').then( (response) => {
    //     console.log(response.data)
    
    //     //armazena os dados do back
    //     setItens(response.data)  
    //   }) 
    // }, [])
  
    // function newRequest() {
    //   api
    //     //posta a quantia de itens solicitados
    //     .post('/item',{ 
    //       amount,
    //     })
    //     .then((response) => {
    //       console.log(response)
    //     })
    // }
    {/* // Testando a rota de itens do DB */}
            {/* { itens.map( iten => (
                <Text key={iten.id}>Nome: {iten.name}</Text>
            ))} */}


    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            
            <Text>Bem vindo como administrador</Text>

            <TextInput placeholder="Seu nome" required></TextInput>
            
        </View>
    )
}