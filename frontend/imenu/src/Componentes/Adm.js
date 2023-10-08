import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from "react-native";
import { useState, useEffect } from "react";
import api from "../services/api"
import axios from "axios";


export default function Admin() {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [ingredients,setIngredients] = useState('')

    // Find Item by ID
    async function getF(){
        const response = await api.get('/api/findItemById/651a0776dd20690d6d98555b/')
        setName(response.data.name)
        setIngredients(response.data.ingredients)
        setPrice(response.data.price)
    }

    //another get function
    useEffect(() => {
        api.get('/api/findItemById/651a0776dd20690d6d98555b')
        .then(({data}) => {
            setName(data)
        });
    }, [])

    //post function
    async function postF () {
        const Data = {
            name: name, 
            price: price,
            ingredients: ingredients
        }
        axios.post({
            metlhod: 'POST',
            url: 'http://localhost:3000/api/createItem', 
            data: Data,
        })
        .then(function(response){
            console.log(response.data)
        })
      }

    return (
        <View style={{flex:1,backgroundColor:"#90B7C1" }}>
            <View style={styles.header}>
                <Text style={{fontSize:18,color:"white"}}>Admin's Screen</Text>
            </View>
            <View style={styles.fundo}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Name" 
                    onChangeText={setName}
                    value={name}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Ingridients"
                    onChangeText={setIngredients}
                    value={ingredients}/>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={setPrice}
                    value={price}
                    placeholder="Price"
                    keyboardType="numeric"/>
                <TouchableOpacity style={styles.add} 
                    onPress={postF} >
                    <Text style={styles.text_a}>Add</Text>
                </TouchableOpacity>

                <View style={{justifyContent:"center",alignContent:"center"}}>
                    <Text></Text>
                    <Text>View para ver os valores</Text>
                    <Text></Text>
                    <Text>O nome:     {name}</Text>
                    <Text>O ingred.:  {ingredients}</Text>
                    <Text>O preco:     {price}</Text>
                </View>
            </View>
        </View>
    )
}

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
        marginLeft:20,
        marginTop:10,
        fontSize: 20,
        borderRadius:10,
        backgroundColor: "#277C9D",
        height: 35,
        width:300,
    },
    add: {
        backgroundColor: "#009427",
        marginTop: 15,
        width:80,
        height:40,
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center",
    },
    text_a:{
        fontWeight: 'bold',
    }
  })


//   <TouchableOpacity style={styles.add} 
//   onPress={getF} >
//   <Text style={styles.text_a}>View</Text>
// </TouchableOpacity>

// <Text></Text>
// <Text>View para ver os valores</Text>
// <Text></Text>
// <Text>O nome:     {name}</Text>
// <Text>O ingred.:  </Text>
// <Text>O preco:     {price}</Text>

