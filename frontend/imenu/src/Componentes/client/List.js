import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useContext } from "react";
import propTypes from 'prop-types'
import AppContext from "../context/AppContext";
import Prato from "./Prato";

export default function List({ data }){
    // url images           
    const imgAdd = "https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png"
    const imgInfo= "https://cdn-icons-png.flaticon.com/512/3444/3444393.png"

    const {name, price, ingredients, image, _id} = data

    const { order, setOrder } = useContext(AppContext)
    
    const sendOrder = () => {
        setOrder([...order, data])
    }   

    return((
        <View style={styles.container}>
            <View style={styles.descrition}>
                <Text style={{fontSize:20}}>{name}</Text>
                <Text style={{fontSize:14}}>{ingredients}</Text> 
                <Text style={{fontSize:18,color:'#038028'}}>R$ {price}</Text>
            </View>
            <View style={styles.adiciona}>
                <Image 
                source={{uri: image}}
                style={styles.imgItems}
                />
                <View style={styles.funcionalidades}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Prato')}>
                        <Image 
                        source={{uri: imgInfo}}
                        style={styles.imgIcons}
                        /> 
                    </TouchableOpacity>
                    {/* <Text style={{fontSize:18,color:'#038028'}}>{quatity}</Text> */}
                    <TouchableOpacity 
                        onPress={sendOrder}>
                        <Image 
                        source={{uri: imgAdd}}
                        style={styles.imgIcons}
                        /> 
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    ))
}


const styles = StyleSheet.create({
container:{
    flex:1,
    height:150,
    backgroundColor:"#E9E9E9",
    marginBottom:8,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"space-between",
},
descrition:{
    flex:3/4,
    padding:24,
    justifyContent:"space-between",
    flexDirection:"colum",
    alignItems:"flex-left",
    
},
adiciona:{
    flex:1/4,
    marginRight:14,
    marginTop: 10,
    justifyContent:"space-between",
    marginBottom:15,
},
funcionalidades:{
    marginTop: 10,
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom:15,
},
button:{
    width:100,
    height:30,
    backgroundColor:"#04446C",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center"
},
imgIcons: {
    width:30, 
    height:30, 
    borderRadius:15
},
imgItems: {
    width:80, 
    height:65, 
    borderRadius:15, 
    marginLeft:4,
}
})