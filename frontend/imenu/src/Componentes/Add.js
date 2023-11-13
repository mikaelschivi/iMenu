import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, } from "react-native";
import { useState, useEffect } from "react";


export default function Add(){
    
        const [name,setName] = useState('')
        const [price,setPrice] = useState('')
        const [ingredients,setIngredients] = useState([''])

        const [data,setData] = useState([])


        useEffect(() => {
            const fetchData = async () => {
            const response = await fetch("http://192.168.42.175:3000/api/findItemById/651a0776dd20690d6d98555b/")
                try {
                const responseJson = await response.json()
                setName(responseJson.user.name)
                setPrice(responseJson.user.price)
                setIngredients(responseJson.user.ingredients)
                setData(responseJson);
                }
                catch (error) {
                console.log(error)
                }
            }
            fetchData();
        }, []);
    
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
                            placeholder=" Ingridientes"
                            onChangeText={setIngredients}
                            value={ingredients}/>
                        <TextInput 
                            style={styles.textInput} 
                            onChangeText={setPrice}
                            value={price}
                            placeholder=" Preço"
                            keyboardType="numeric"/>


                        <TouchableOpacity style={styles.bottom}>
                            <Text style={styles.text_a}>Adicionar</Text>
                        </TouchableOpacity>


                        <View style={{justifyContent:"center",alignContent:"center"}}>
                            <Text>View para ver os valores</Text>
                            <Text>Nome:     {name}</Text>
                            <Text>Ingredientes:  {ingredients}</Text>
                            <Text>Preço:     {price}</Text>
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