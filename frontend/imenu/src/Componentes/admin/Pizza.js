import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, Button, ImageBackground, TextInput} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";
const URL = require('../../Componentes/api/URL')

export default function Pizza() {

    const [pizza,setPizza] = useState([])

    useEffect(() => {
        setPizza([])
        const fetchData = async () => {
          const response = await fetch(URL + "findAllItems")
            try {
              const responseJson = await response.json()
              //console.log(responseJson.items)
              for (let i = 0; i < responseJson.items.length; i++) {
                if (responseJson.items[i].classe == "Pizza") {
                  setPizza(pizza => [...pizza, responseJson.items[i]]);
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
          <FlatList data={pizza}
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