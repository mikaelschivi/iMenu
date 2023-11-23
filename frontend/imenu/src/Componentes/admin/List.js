import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavegation ,navigate} from '@react-navigation/native';

export default function List(props,{navigation}){
    // url images           
    

    const quatity = 1 //getItemQuantity(id)
    const [plateItems,setPlateItems] = useState([''])
        //id : String,
        //quantity : Number
        //}
    //
    const [item,setItem] = useState('')
        
    // function sendOrder (item) {
    //     console.log("Pedido  :", props.data._id)
    //     //setOrder(order => [...order, props.data])
    //     setPlateItems(plateItems => [...plateItems, {
    //         id : item
    //         //quantity : 1             
    //     }])
    //     console.log("Pedido depois :",plateItems)
    // }
    //module.exports.pedido=pedido;
    
    const sendOrder = () => {
        //event.preventDefault()
        setPlateItems(plateItems => [...plateItems,{
            id : props.data._id,
            name : props.data.name,
            price : props.data.price,
            img : props.data.image
        }])
        console.log("Pedido depois :",plateItems)
    }
    module.exports = plateItems

    return((
        <View style={styles.container}>
            <View style={styles.descrition}>
                <Text style={{fontSize:20}}>{props.data.name}</Text>
                <Text style={{fontSize:14, marginBottom:20}}>{props.data.ingredients}</Text> 
            </View>
            <View style={styles.imagem}>
                <Image 
                source={{uri: props.data.image}}
                style={styles.imgItems}
                />
                
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
imagem:{
    flex:1/4,
    marginRight:"5%",
    marginTop: "10%",
    justifyContent: "space-between",
    marginBottom: "10%"
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
    width: "100%", 
    height:"100%", 
    borderRadius:15, 
    marginLeft:4,
}
})