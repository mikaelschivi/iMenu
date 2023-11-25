import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';

export default function Verificar({navigation}) {
  return (
    <View style={styles.fundo}>
      <View style={styles.bodyLogo}>
            <Image style={styles.logo}
            source={require("../../../img/logo.png")}/>
      </View>
      <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Hamburguer')}>
        <Text style={styles.text_a}>Hamburgueres</Text>
        <Image style={styles.logo_bottom} source={require("../../../img/xis.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Pizza')}>
        <Text style={styles.text_a}>Pizzas</Text>
        <Image style={styles.logo_bottom} source={require("../../../img/pizza.png")}/> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Bebida')}>
        <Text style={styles.text_a}>Bebidas</Text> 
        <Image style={styles.logo_bottom} source={require("../../../img/refri.png")}/>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  fundo:{
      alignItems: "center",
      backgroundColor: "#90B7C1",
      height: "100%"
  },
  bottom: {
      backgroundColor: "#277C9D",
      marginTop: 15,
      width: 280,
      height: 90,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",  
      flexDirection: "row" 
  },
  text_a:{
      flex: 1,
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 15
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
  },
  logo_bottom: {
    marginLeft: "10%",
    marginRight: 10,
    width: 35,
    height: 35,
  },
})
