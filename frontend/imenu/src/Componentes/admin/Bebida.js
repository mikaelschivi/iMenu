import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, Button, ImageBackground, TextInput} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";
const URL = require('../../Componentes/api/URL')

export default function Bebida() {

    const [bebidas,setBebidas] = useState([])

    useEffect(() => {
        setBebidas([])
        const fetchData = async () => {
          const response = await fetch(URL + "findAllItems")
            try {
              const responseJson = await response.json()
              //console.log(responseJson.items)
              for (let i = 0; i < responseJson.items.length; i++) {
                if (responseJson.items[i].classe == "Bebida") {
                  setBebidas(bebidas => [...bebidas, responseJson.items[i]]);
                }
              }
            }
            catch (error) {
              console.log(error)
            }
        }
          fetchData();
      }, []);

    return (
        <View style={styles.container}>      
          <FlatList data={bebidas}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
        </View>
    );
}


const styles = StyleSheet.create({
    titulo:{
      fontWeight: 'bold',
      marginLeft: 17,
      marginBottom: 10,
      fontSize: 25,
    },
    container:{
      flex:1,
      height: "100%",
      backgroundColor: "#90B7C1",
  },
  })