import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, Button, ImageBackground, TextInput} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";

export default function Verificar({navigation}) {

     // url images
    const imgBackground = "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg"

  const [pizza,setPizza] = useState([])
  const [hamburgueres,setHamburgueres] = useState([])
  const [bebidas,setBebidas] = useState([])
  
  //Get com fetch
  useEffect(() => {
    setPizza([])
    setHamburgueres([])
    setBebidas([])
    const fetchData = async () => {
      const response = await fetch("http://192.168.0.4:3000/api/findAllItems")
        try {
          const responseJson = await response.json()
          //console.log(responseJson.items)
          for (let i = 0; i < responseJson.items.length; i++) {
            if (responseJson.items[i].classe == "pizza") {
              setPizza(pizza => [...pizza, responseJson.items[i]]);
            }
            else if (responseJson.items[i].classe == "hamburguer") {
              setHamburgueres(hamburgueres => [...hamburgueres, responseJson.items[i]]);
            }
            else if (responseJson.items[i].classe == "Bebida") {
                setHamburgueres(bebidas => [...bebidas, responseJson.items[i]]);
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

    <View style={styles.fundo}>
      <View style={styles.bodyLogo}>
            <Image style={styles.logo}
            source={require("../../../img/logo.png")}/>
      </View>
    <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Hamburguer')}>
      
        <Text style={styles.text_a}>Hamburgueres</Text>
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Pizza')}>
      
        <Text style={styles.text_a}>Pizzas</Text> 

      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Bebida')}>
      
        <Text style={styles.text_a}>Bebidas</Text> 

      </TouchableOpacity>


        </View>
  );
}


const styles = StyleSheet.create({
  body: {
      flex:1, 
      alignItems: "center",
      backgroundColor:'#90B7C1',
    },
  body1: {
      flex:2,
      justifyContent: "flex-start",
      backgroundColor:"#90B7C1",
      flexDirection: "column",
      marginTop: 20,
  },
  header: {
      height:50,
      alignItems: "center",
      justifyContent:"center",
      backgroundColor: "#277C9D",
      borderRadius:5,
  },
  fundo:{
      marginLeft:40,
      marginRight:40,
      alignItems: "center",
  },
  textInput: {
      marginTop:10,
      fontSize: 20,
      borderRadius:10,
      backgroundColor: "#277C9D",
      height: 50,
      width:300,
  },
  bottom: {
      backgroundColor: "#277C9D",
      marginTop: 15,
      width: 250,
      height: 90,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",   
  },
  text_a:{
      fontWeight: 'bold',
      fontSize: 25,

  },
  logo: {
      width: 220,
      height: 220,
  },
  bodyLogo:{
      alignItems: "center",
      justifyContent: "center",
      width: 250,
      backgroundColor: "#277C9D",
      height: 250,
      borderRadius: 20,
      marginTop: 20,
      marginBottom: "15%"
    },
    logo: {
      width: 220,
      height: 220,
    }
})
