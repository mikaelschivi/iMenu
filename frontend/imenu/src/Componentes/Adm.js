import React from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import { useState, useEffect } from "react";
//import {getRequest} from "../services/api";

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
            
    {/* <TouchableOpacity onPress={getRequest}>
            <Text>Get function</Text>
        </TouchableOpacity> */}


    return (
        <View style={{alignItems: "center", marginTop:'60%'}}>
            <View>
                <Text style={{fontSize:18}}>Bem vindo administrador</Text>
                <TextInput>Nome</TextInput>
                <TextInput>Descrição</TextInput>
                <TextInput>Preco</TextInput>
                <TouchableOpacity >
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
       
        
    )

}