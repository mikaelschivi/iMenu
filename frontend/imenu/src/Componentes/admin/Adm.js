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
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Adicionar Produto')}>
                    <Text style={styles.text_a}>Adicionar</Text>  
                    <Image style={styles.logo_bottom} source={require("../../../img/mais.png")}/>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Ver os Produtos')}>
                    <Text style={styles.text_a}>Verificar</Text>
                    <Image style={styles.logo_bottom} source={require("../../../img/lupa.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Fila de Pedidos')}>
                    <Text style={styles.text_a}>Cozinha</Text>
                    <Image style={styles.logo_bottom} source={require("../../../img/cheff.png")}/>
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
        width:250,
        height:90,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",  
        flexDirection: "row" 
    },
    text_a:{
        fontWeight: 'bold',
        fontSize: 25,

    },
    logo_bottom: {
        marginLeft: "10%",
    },
    logo: {
        width: 220,
        height: 220,
    },
    bodyLogo:{
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        backgroundColor: "#277C9D",
        height: 250,
        borderRadius: 20,
        marginTop: 20,
      },
      logo: {
        width: 220,
        height: 220,
      }
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