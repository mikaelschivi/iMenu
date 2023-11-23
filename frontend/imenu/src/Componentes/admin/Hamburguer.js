import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, Button, ImageBackground, TextInput} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";

export default function Hamburguer() {

    const [hamburgueres,setHamburgueres] = useState([])

    useEffect(() => {
        setHamburgueres([])
        const fetchData = async () => {
          const response = await fetch("http://192.168.0.4:3000/api/findAllItems")
            try {
              const responseJson = await response.json()
              //console.log(responseJson.items)
              for (let i = 0; i < responseJson.items.length; i++) {
                if (responseJson.items[i].classe == "Hamburguer") {
                  setHamburgueres(hamburgueres => [...hamburgueres, responseJson.items[i]]);
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
        <View>      
            <View>
                <FlatList data={hamburgueres}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <List data={item} />} 
                />
            </View>
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
  })