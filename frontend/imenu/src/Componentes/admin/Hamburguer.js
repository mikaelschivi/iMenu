import React from 'react';
import {StyleSheet, View, FlatList,} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";

export default function Hamburguer() {

    const [hamburgueres,setHamburgueres] = useState([])

    useEffect(() => {
        setHamburgueres([])
        const fetchData = async () => {
          const response = await fetch("http://192.168.42.107:3000/api/findAllItems")
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
        <View style={styles.container}>   
          <FlatList data={hamburgueres}
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