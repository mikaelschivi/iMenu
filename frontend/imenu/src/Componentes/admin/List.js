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

        async function delete_item(id_item){
            const id = id_item
            const url = "http://192.168.0.4:3000/api/deleteItemById/" + id
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if(!response.ok){
                    console.log("Deu erro")
                }
            })   
        }
    
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
                <View style={styles.delete}>
                <TouchableOpacity onPress={() => delete_item(props.data._id)}>
                    <Text style={{fontSize:15,color: "#FFFFFF"}}>Deletar</Text>
                </TouchableOpacity>
                </View> 
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
    height: 170,
    backgroundColor:"#E9E9E9",
    marginBottom:8,
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor: "#277C9D",
},
descrition:{
    flex:3/4,
    padding:24,
    flexDirection:"colum",
    alignItems:"flex-left",
    justifyContent: "space-around"
},
imagem:{
    flex:1/4,
    marginRight:"5%",
    marginTop: "5%",
    justifyContent: "space-between",
    width: "10%",
    height: "50%"
},
funcionalidades:{
    marginTop: 10,
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom:15,
},
button:{
    width:100,
    height:"25%",
    backgroundColor:"#04446C",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
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
},
delete: {
    width: 150,
    height: 50,
    backgroundColor: "#DB0000",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
}
})