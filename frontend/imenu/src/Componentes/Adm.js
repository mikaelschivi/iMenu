import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, } from "react-native";
import { useState, useEffect } from "react";


export default function Admin({navigation}) {
    
    return (
        <View style={{flex:1,flexDirection: "colunm",justifyContent: "center",backgroundColor:"#90B7C1" }}>
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
