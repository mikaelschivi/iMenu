import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {useNavegation} from '@react-navigation/native';
import { useEffect,useState} from 'react';
var pedidos=require('./client/List')

export default function Prato ( props,{navigation} ) {
    // url images           
    const imgAdd = "https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png"
    const imgLix= "https://cdn-icons-png.flaticon.com/512/5510/5510213.png"

    const [table,setTable] = useState('')
    const pedido = pedidos.pedido
    // const order = pedidos.order
    // console.log("Pedido:",order)

    // Finaliza e envia o pedido e a mesa para a cozinha
    function finishOrder () {
        //setOrder(order => [ ]);
        alert('Seu pedido foi realizado')
        setTable([''])
        return 
    }
    // module.exports.order=order;
    // module.exports.table=table;

    return (
        <View style={styles.body}>
            <View style={styles.pedidos}>
                <View style={styles.pedido}>
                    <View style={styles.descrition}>
                        <Text style={{fontSize:20}}>{pedido[1].name}</Text> 
                        <Text style={{fontSize:18,color:'#038028'}}>R$ {pedido[0].price}</Text>
                    </View>
                    <View style={styles.adiciona}>
                        <Image 
                        source={{uri: pedido[0].image}}
                        style={styles.imgItems}
                        />
                        <View style={styles.funcionalidades}>
                            <TouchableOpacity 
                                onPress={ () => alert('Excluido')}>
                                <Image 
                                source={{uri: imgLix}}
                                style={styles.imgIcons}
                                /> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                onPress={() => alert('Adicionado')}>
                                <Image 
                                source={{uri: imgAdd}}
                                style={styles.imgIcons}
                                /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
            <View style={styles.finalPedidos}>
                <View style={styles.numMesa}>
                    <Text style={{fontSize: 25, marginLeft:10, }}>Mesa: </Text>
                    <TextInput 
                            style={{fontSize: 25}} 
                            placeholder="mesa" 
                            onChangeText={setTable}
                            value={table}
                            keyboardType="numeric"/>
                </View>
                <TouchableOpacity style={styles.bttnFin}
                    onPress={() => finishOrder()}>
                    <Text style={styles.text_bttnFin}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#90B7C1",
    },
    pedidos:{
        flex:8/10,
        marginTop:10
    },
    pedido:{
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
    finalPedidos: {
        flex:2/10, 
        borderRadius:15, 
        marginLeft:4,
        alignItems:"center",
        justifyContent:"center"
    },
    bttnFin: {
        backgroundColor:"#128503",
        width:200, 
        height:65, 
        borderRadius:15, 
        marginLeft:4,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:35
    },
    text_bttnFin: {
        fontSize: 25
    },
    numMesa: {
        width:180, 
        height:65, 
        borderRadius:20, 
        backgroundColor:"#b5bdbb",
        flexDirection: "row",
        alignItems:"center",
        marginBottom:15
    },
})
