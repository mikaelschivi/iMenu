import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";


export default function Cozinha(){
        const [text,setText] = useState('AGUARDANDO PREPARAÇÃO')
        const [color,setColor] = useState("#DB0000")
    const finalizado = () =>{
        return(
            setText('Pronto'),
            setColor('#219D1F')
        )
    }
    return (
        <View style={styles.fundo}>
            <View style={styles.pedido}>
                <View style={styles.lanches}>
                <View style={styles.lanche}>
                        <View style={styles.nomes}>
                            <Text style={{ fontSize: 24}}>Xis tudo</Text>
                        </View>
                        <View style={styles.qtd}>
                            <Text style={{ fontSize: 20}}>5</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mesa}>
                    <Text style={{ fontSize: 20}}>MESA 1</Text>
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
            {/* pedido 2 */}
            <View style={styles.pedido}>
                <View style={styles.lanches}>
                    <View style={styles.lanche}>
                        <View style={styles.nomes}>
                            <Text style={{ fontSize: 24}}>Xis tudo</Text>
                        </View>
                        <View style={styles.qtd}>
                            <Text style={{ fontSize: 20}}>5</Text>
                        </View>
                    </View>
                    <View style={styles.lanche}>
                        <View style={styles.nomes}>
                            <Text style={{ fontSize: 24}}>Xis tudo</Text>
                        </View>
                        <View style={styles.qtd}>
                            <Text style={{ fontSize: 20}}>5</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mesa}>
                    <Text style={{ fontSize: 20}}>MESA 1</Text>
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
        </View>
    )
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
    },
    nomes:{
        flex: 1,
        width: 397,
        height: 123,
        alignItems: "flex-start",
    },
    qtd:{
        width: 40,
        height: 34,
        backgroundColor: "#D6DFD9",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#000000",
        borderBottomWidth: 2.5,
        borderTopWidth: 2.5,
        borderLeftWidth: 2.5,
        borderRightWidth: 2.5,
    },
    mesa:{
        flex: 1,
        justifyContent: "flex-end",
    },
    lanche:{
        flexDirection: "row",
        marginTop: "5%",
        width: 360,
        height: 30,
        marginLeft: "5%",
        marginRight: "5%"
    }
})