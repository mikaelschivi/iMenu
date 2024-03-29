import React, { useState, useContext} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import AppContext from "../context/AppContext";

export default function ListCozinha({ data }){
    const [text,setText] = useState('AGUARDANDO PREPARAÇÃO')
    const [color,setColor] = useState("#DB0000")
    //const {name, price, ingredients, image} = data

    const {_id, nome, preco, ingredientes, imagem, quantidade} = data

    const {ordersDone, setOrdersDone, tables } = useContext(AppContext)
    console.log("Pedidos na fila: ", ordersDone)

    const finalizado = () =>{
        //assim remove todos os itens da fila
        // setOrdersDone([])
        // console.log("Pedido: ", ordersDone)
        return(
            setText('Pronto'),
            setColor('#219D1F')
        )
    }
    
    return((
        <View style={styles.pedido}>
            <View style={styles.lanches}>
            <View style={styles.lanche}>
                <View style={styles.qtd}>
                    <Text style={{ fontSize: 20}}>{quantidade + 1}</Text>
                </View>
                <View style={styles.nomes}>
                    <Text style={{ fontSize: 24}}>{nome}</Text>
                </View>
                <View style={styles.img}>
                    <Image 
                    source={{uri: imagem}}
                    style={styles.imgItems}
                    />
                </View>
                </View>
            </View>
            <View style={styles.mesa}>
                <Text style={{ fontSize: 20}}>MESA {tables}</Text>
            </View>
            <View style={styles.view_bottom}>   
                <TouchableOpacity style={
                    {
                    backgroundColor: color,  
                    width:313, height: 68,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
                    }
                } onPress={() => finalizado()}>
                    <Text style={{ fontSize: 24, color: "#FFFFFF"}}>{text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    ))
}


const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "#90B7C1",
        height: '100%'
    },
    pedido: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        width: 414,
        height: 279,
        marginTop: "5%",
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center"
    },
    view_bottom: {
        flex: 1,
        width: 313,
        height: 68,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: "5%",
    },
    lanches:{
        flexDirection: "collum",
        justifyContent: "center",
        marginTop: "5%",
    },
    nomes:{
        flex: 1,
        width: 397,
        height: 123,
        alignItems: "flex-start",
        flexDirection: "row",
        marginRight: 40,
        marginLeft: 20
    },
    img:{
        width: 40,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#000000",
        borderBottomWidth: 2.5,
        borderTopWidth: 20,
        borderLeftWidth: 2.5,
        borderRightWidth: 2.5,
        marginTop:10,
        marginBottom:10,
        marginRight:20
    },
    mesa:{
        flex: 1,
        justifyContent: "flex-end",
        marginTop:20,
        marginBottom:10,
    },
    lanche:{
        flexDirection: "row",
        marginTop: "5%",
        width: 360,
        height: 30,
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%"
    },
    imgItems: {
        width:80, 
        height:65, 
        borderRadius:15, 
        marginLeft:4,
    },
    qtd: {
        backgroundColor: "#a3acad",
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 10
    }
})