import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from "react-native";
import { useState, useEffect } from "react";



export default function Add(){
    
        const [name,setName] = useState('')
        const [price,setPrice] = useState('')
        const [ingredients,setIngredients] = useState([''])
        const [classe, setClasse] = useState('')

    
        return(

        <View style={{flex:1,backgroundColor:"#90B7C1" }}>
                    <View style={styles.fundo}>
                        <Text value={name}></Text>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder=" Nome" 
                            onChangeText={setName}
                            value={name}/>
                            <TextInput 
                            style={styles.textInput} 
                            onChangeText={setClasse}
                            value={classe}
                            placeholder=" Classe"/>
                        <TextInput 
                            style={styles.textInput}
                            placeholder=" Ingridientes"
                            onChangeText={setIngredients}
                            value={ingredients}/>
                        <TextInput 
                            style={styles.textInput} 
                            onChangeText={setPrice}
                            value={price}
                            placeholder=" Preço"
                            keyboardType="numeric"/>


                    <TouchableOpacity style={styles.bottom}
                    onPress={() => addToBD({name: name, classe: classe, ingredients: ingredients, price: price})}>
                            
                    <Text style={styles.text_a}>Adicionar</Text>
                    </TouchableOpacity>


                        <View style={{justifyContent:"center",alignContent:"center"}}>
                            <Text>View para ver os valores</Text>
                            <Text>Nome: {name}</Text>
                            <Text>Classe: {classe}</Text>
                            <Text>Ingredientes: {ingredients}</Text>
                            <Text>Preço: {price}</Text>
                        </View>
                        </View>
        </View>
        )};

const styles = StyleSheet.create({
    header: {
        height:50,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#277C9D",
        borderRadius:5,
    },
    fundo:{
        marginLeft:40,
        marginRight:40,
        alignItems: "center",
    },
    textInput: {
        marginTop:10,
        fontSize: 20,
        borderRadius:10,
        backgroundColor: "#277C9D",
        height: 50,
        width:300,
    },
    bottom: {
        backgroundColor: "#009427",
        marginTop: 15,
        width:200,
        height:60,
        borderRadius: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text_a:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
    }
})


async function addToBD(lanche){
    setName('')
    setClasse('')
    setIngredients('')
    setPrice('')
    const response = await fetch("https://192.168.0.4/api/createItem", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(lanche),
    })

    try {
        const resposta = await response.json()
        return (
            
            console.log(resposta)
        )
        
    }

    catch (error) {
        console.log(error)
      }


    

}