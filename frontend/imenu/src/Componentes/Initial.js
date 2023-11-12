import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Admin from './Adm';
import Cardapio from './Cardapio';

export default function Initial({navigation}) {
    
  return (
    <View style={styles.body}> 
      <View style={styles.body2}>
        <Text style={styles.title}>Welcome to iMenu</Text>  
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
            <Text style={{fontSize:26}}>Client</Text>
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
    backgroundColor:'#90B7C1',
  },
  body2: {
    flex:1, 
    alignItems: "center",
    justifyContent:"flex-end"
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
})