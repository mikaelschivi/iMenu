import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList} from "react-native";
import { useEffect,useState, useContext} from 'react';
import AppContext from '../context/AppContext';
import propTypes from 'prop-types'
import ListOrder from './ListOrder';

export default function Prato ({data}) {
    const { order, setOrders } = useContext(AppContext)

    const totalPrice = order.reduce((acc, order) => {
        return order.price + acc
    }, 0)

    return (
        <View style={styles.body}>
            <View style={styles.pedidos}>
                <FlatList data={order}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({item})=> <ListOrder data={item} />} 
                />
            </View>
            <View style={styles.finalPedidos}>
                <View style={styles.obj}>
                    <View style={styles.numMesa}>
                        <Text style={{fontSize: 25, marginLeft:10, }}>Mesa: </Text>
                        <TextInput 
                            style={{fontSize: 25}} 
                            placeholder="mesa" 
                            // onChangeText={setTable}
                            // value={table}
                            keyboardType="numeric"/>
                    </View>
                    <View style={styles.valPedido}>
                        <Text style={{fontSize: 25, marginLeft:10, }}>Total: {totalPrice}</Text>
                        <Text
                            style={{fontSize: 25}} 
                            placeholder="valor"
                            keyboardType="numeric">
                        </Text>
                    </View>
                </View>
                    <TouchableOpacity style={styles.bttnFin}
                        // onPress={}
                        >
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
        flex:7.8/10,
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
        marginRight:50,
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
        borderRadius:15,
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
        marginBottom:15,
        marginTop:40
    },
    valPedido: {
        width:180, 
        height:65, 
        borderRadius:20, 
        backgroundColor:"#b5bdbb",
        flexDirection: "row",
        alignItems:"center",
        marginBottom:15,
        marginLeft: 10,
        marginTop:40
    },
    obj: {
        flexDirection: 'row'
    },
    quant: {
        width: 40, 
        height: 40, 
        borderRadius:5, 
        backgroundColor:"#b5bdbb",
        alignItems:"center",
        marginBottom:15,
        marginLeft: 10,
        marginRight: 10
    },
})