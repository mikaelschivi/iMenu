import React, { useState, useContext, useEffect } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'
import propTypes from 'prop-types'
import AppContext from "../context/AppContext";

export default function List({ data }){
    const navigation = useNavigation()

    // url images           
    const imgAdd = "https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png"
    const imgInfo= "https://cdn-icons-png.flaticon.com/512/3444/3444393.png"

    const { order, setOrder} = useContext(AppContext)
    const {name, price, ingredients, image, _id} = data
    const [amount,setAmount] = useState(0)
    
    const itensPedido = {
        "_id" : _id,
        "nome" : name,
        "ingredientes" : ingredients,
        "preco" : price,
        "imagem" : image,
        "quantidade" : amount
    }

    const addOrder = () => {
        for (let i = 0; i < order.length; i++) {
            if (order[i]._id == itensPedido._id) {
                setAmount(amount + 1)
                console.log("Pedido",order)
                return
            }
        }
        // const objetoEncontrado = order.find(objeto => objeto.id === itensPedido._id);
        // if (objetoEncontrado){
        //     console.log("ja ta dentro")
        //     setAmount(amount + 1)
        //     return
        // }
        //console.log(_id)
        setOrder(order => [...order, itensPedido])
        setAmount(amount + 1)
        itensPedido.quantidade = amount
    }
    
    useEffect(() => {
        setTimeout(() => {
        }, 2000);
    },[amount,order]);

    return((
        <View style={styles.container}>
            <View style={styles.descrition}>
                <Text style={{fontSize:20}}>{itensPedido.nome}</Text>
                <Text style={{fontSize:14}}>{itensPedido.ingredientes}</Text> 
                <Text style={{fontSize:18,color:'#038028'}}>R$ {itensPedido.preco}</Text>
            </View>
            <View style={styles.adiciona}>
                <Image 
                source={{uri: itensPedido.imagem}}
                style={styles.imgItems}
                />
                <View style={styles.funcionalidades}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('PratoItems')}>
                        <Image 
                        source={{uri: imgInfo}}
                        style={styles.imgIcons}
                        /> 
                    </TouchableOpacity>
                    <Text style={{fontSize:18,color:'#038028'}}>{itensPedido.quantidade}</Text>
                    <TouchableOpacity 
                        onPress={addOrder}>
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