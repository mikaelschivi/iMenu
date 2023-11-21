import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image} from "react-native";
import { useState, useEffect } from "react";


export default function Admin({navigation}) {
    
    return (
        <View style={styles.body}>
            <View style={styles.bodyLogo}>
            <Image style={styles.logo}
            source={require("../../../img/logo.png")}/>
            </View>
            <View style={styles.body1}>
            <View style={styles.fundo}>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Add')}>
                    <Text style={styles.text_a}>Adicionar</Text>       
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Verify')}>
                    <Text style={styles.text_a}>Verificar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Delete')}>
                    <Text style={styles.text_a}>Deletar</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex:1, 
        alignItems: "center",
        backgroundColor:'#90B7C1',
      },
    body1: {
        flex:2,
        justifyContent: "flex-start",
        backgroundColor:"#90B7C1",
        flexDirection: "column",
        marginTop: 20,
    },
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
        backgroundColor: "#277C9D",
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

    },
    logo: {
        width: 220,
        height: 220,
    },
    bodyLogo:{
        alignItems: "center",
        justifyContent: "center",
        width: "55%",
        height: "25%",
        backgroundColor: "#277C9D",
        borderRadius: 40,
        marginTop: "20%"
    },
  })

//   bodyLogo:{
//     alignItems: "center",
//     justifyContent: "center",
//     width: "55%",
//     height: "25%",
//     backgroundColor: "#277C9D",
//     borderRadius: 40,
//     marginTop: "20%"
//   },