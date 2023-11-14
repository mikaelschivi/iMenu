import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavegation ,navigate} from '@react-navigation/native';

export default function List(props,{navigation}){
    // url images           
    const imgAdd = "https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png"
    const imgInfo= "https://cdn-icons-png.flaticon.com/512/3444/3444393.png"

    const [order,setOrder] = useState([])
    
    
    // function sendOrder () {
    //     setOrder(order => [...order, props.data]);
    //     console.log("Dado:",props.data.name)
    //     console.log(order)
    //     return order
    // }
    // module.exports.order=order;

                //teste para adicionar mais de um item no prato
    const [pedido,setPedido] = useState([])

    function sendPedido () {
        if (pedido == []){
            setPedido({
                name : props.data.name,
                ingredients : props.data.ingredients,
                price : props.data.price,
                image : props.data.image
            })
            return pedido
        }
        else{
            setPedido(pedido=> [...pedido,{
                name : props.data.name,
                ingredients : props.data.ingredients,
                price : props.data.price,
                image : props.data.image}   
        ]);return pedido}
             
    }
    //console.log("Pedido foi :",pedido)
    module.exports.pedido=pedido;



    const [teste,setTeste] = useState([])
    
    function adicionando () {
        if (teste.length === 0){
            setTeste(teste=> [...teste,{
                name : "priumeiro",
                ingredients : "primeiro",
            }])
            console.log("valor :",teste)  
            return teste
        }
        else{
            setTeste(teste=> [...teste,{
                name : "segundo",
                ingredients : "segundo", 
            }]);
            console.log("valor :",teste)  
            return teste}
    }
    
    

    return((
        <View style={styles.container}>
            {/* <TouchableOpacity 
                onPress={() => adicionando()}>
                <Image 
                source={{uri: imgAdd}}
                style={styles.imgIcons}
                /> 
            </TouchableOpacity> */}
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
                    
                    <TouchableOpacity 
                        onPress={() => adicionando()}>
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
    marginLeft:4
},
})