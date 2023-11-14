import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Admin from './Adm';
import Cardapio from './Cardapio';

export default function Initial({navigation}) {
    
  return (
    <View style={styles.body}> 
      <View style={styles.bodyLogo}>
        <Image style={styles.logo}
        source={require("../../img/logo.png")}/>
      </View>
      <View style={styles.body3}>
        <View style={styles.screens}>
          {/* Go to Adm */}
          <TouchableOpacity style={{flexDirection:"row",alignItems: "center"}}
            onPress={() => navigation.navigate('Adm')}>
            <Text style={{fontSize:26}}>Admin</Text>
            <Image style={styles.images}
            source={{uri:"https://w7.pngwing.com/pngs/859/440/png-transparent-computer-icons-scalable-graphics-administration-icon-cdr-computer-wallpaper-monochrome.png"}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.screens}>
          {/* Go to Menu */}
          <TouchableOpacity style={{flexDirection:"row",alignItems: "center"}}
            onPress={() => navigation.navigate('Cardapio')}>
            <Text style={{fontSize:26}}>Cliente</Text>
            <Image style={styles.images}
            source={{uri:"https://cdn-icons-png.flaticon.com/512/3428/3428655.png"}}/>
            </TouchableOpacity>
        </View>
      </View>
    </View> 
  );
}


const styles = StyleSheet.create({
  body: {
    flex:1, 
    alignItems: "center",
    backgroundColor:'#90B7C1',
  },
  body3: {
    flex:2, 
    alignItems: "center",
    justifyContent:"center",
  },
  title: {
    fontFamily: "Arial",
    fontSize:30,
    fontWeight:"bold",
  },
  screens: {
    width: 250,
    height: 100,
    backgroundColor:'#277C9D',
    borderRadius: 30,
    marginBottom: 60,
    flexDirection: "row",
    justifyContent: "center"
  },
  images: {
    width:50,
    height:50,
    marginLeft: 40,
  },
  bodyLogo:{
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "35%",
    backgroundColor: "#277C9D",
    //backgroundColor: "#90B7C1",
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 40
  }
})