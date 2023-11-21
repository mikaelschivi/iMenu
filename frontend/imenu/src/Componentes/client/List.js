import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavegation ,navigate} from '@react-navigation/native';

export default function List(props,{navigation}){
    // url images           
    const imgAdd = "https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png"
    const imgInfo= "https://cdn-icons-png.flaticon.com/512/3444/3444393.png"

    const quatity = 1 //getItemQuantity(id)
    const [plateItems,setPlateItems] = useState([{
        id : String,
        quantity : Number
        }
    ])
    
    function sendOrder () {
        setOrder(order => [...order, props.data]);
        console.log("Dado:",props.data.name)
        console.log(order)
        return order

    function sendOrder () {
        if (plateItems.length === 0){
            setPlateItems({
                id : props.data.id,
                quantity : 1             
            })
            return plateItems
        }
        else{
            //setOrder(order => [...order, props.data])
            setPlateItems(plateItems => [...plateItems, {
                id : props.data._id,
                quantity : 1             
            }])
            console.log("Pedido foi :",plateItems)
            return plateItems
        }
    }
    //module.exports.pedido=pedido;
    
    return((
        <View style={styles.container}>
            <View style={styles.descrition}>
                <Text style={{fontSize:20}}>{props.data.name}</Text>
                <Text style={{fontSize:14}}>{props.data.ingredients}</Text> 
                <Text style={{fontSize:18,color:'#038028'}}>R$ {props.data.price}</Text>
            </View>
            <View style={styles.adiciona}>
                <Image 
                source={{uri: props.data.image}}
                style={styles.imgItems}
                />
                <View style={styles.funcionalidades}>
                    <TouchableOpacity 
                        onPress={ () => navigation.navigate('Prato')}>
                        <Image 
                        source={{uri: imgInfo}}
                        style={styles.imgIcons}
                        /> 
                    </TouchableOpacity>
                    <Text style={{fontSize:18,color:'#038028'}}>{quatity}</Text>
                    <TouchableOpacity 
                        onPress={() => sendOrder()}>
                        <Image 
                        source={{uri: imgAdd}}
                        style={styles.imgIcons}
                        /> 
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    ))
}}


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