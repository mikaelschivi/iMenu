import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from "react-native";
import { useState, useEffect } from "react";
//import {getFunction, postFunction} from '../services/api';

export default function Admin() {


    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [ingredients,setIngredients] = useState()

    const postFunction = (e) => {
        e.preventDefault()
        
        axios.post('https://localhost:3000/api/createItem', {
          name: name, 
          price: price,
          ingredients: {ingredients}
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))
      }

    return (
        <View style={{flex:1,backgroundColor:"#90B7C1" }}>
            <View style={styles.header}>
                <Text style={{fontSize:18,color:"white"}}>Admin's Screen</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.preencher}>
                    <TextInput style={styles.texto_p}>Name</TextInput>
                </View>
                <View style={styles.preencher}>
                    <TextInput style={styles.texto_p}>Descrition</TextInput>
                </View>
                <View style={styles.preencher}>
                    <TextInput style={styles.texto_p}>Price</TextInput>
                </View>
                <View style={{alignItems:"center"}}>
                <TouchableOpacity style={styles.adicionar} onPress={postFunction} >
                    <Text style={styles.texto_a}>Add</Text>
                </TouchableOpacity>
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
        //backgroundColor:"#90B7C1",
        marginLeft:40,
        marginRight:40,
    },
    preencher:{
      marginTop:10,
      backgroundColor: "#277C9D",
      borderRadius:10,
      height: 35,
    },
    texto_p: {
        marginLeft:20,
        fontSize: 20,
    },
    adicionar: {
        backgroundColor: "#009427",
        marginTop: 15,
        width:80,
        height:40,
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center",
    },
    texto_a:{
        fontWeight: 'bold',
    }
  })

// {/* <View style={{alignItems: "center", justifyContent:"center",}}>
// <Text>Adicionar</Text>

// {/* <TextInput type="name" onChange={getRequest} placeholder="Name" name="" id=""/>
// <TextInput type="adicionar" onClick={getRequest} /> */}

// <TouchableOpacity onPress={getRequest}>
//     <Text >Add</Text>
// </TouchableOpacity>
// <Text></Text>
// </View> */}