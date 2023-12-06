import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import { useState, useContext } from "react";
import AppContext from '../context/AppContext';
import ListCozinha from '../admin/ListCozinha'

export default function Cozinha(){
    
   const {ordersDone} = useContext(AppContext)

    return (
        <View style={styles.fundo}>
            <FlatList data={ordersDone}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({item})=> <ListCozinha data={item} />} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "#90B7C1",
        height: '100%'
    }
})