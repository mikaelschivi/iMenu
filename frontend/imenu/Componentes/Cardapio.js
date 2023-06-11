import React from 'react';
import { StyleSheet, Text, View, Image,FlatList, ScrollView } from 'react-native';
import {useNavegation} from '@react-navigation/native';
import { useEffect,useState } from 'react';
import List from "./List";

export default function App() {
  const navigation = useNavegation();

  const data = [{
    nome:"pizza bacon",
    descrição:"bacon, ovo, ...",
    id:0,
    img:"https://www.furg.br/arquivos/logo-furg.png"
    },
    {
      nome:"pizza bacon",
      descrição:"bacon, ovo, ...",
      id:1,
      img:"https://www.furg.br/arquivos/logo-furg.png"
    }]


  return (
    <View style={{flex:1, alignItems:"center"}}>   
      <View style={{width:414,height:150, alignItems:"center", backgroundColor: '#90B7C1',justifyContent:"center"}}>
        <Image style={{width:414,height:150}}
        source={{uri:"https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg"}}/> 
      </View>
      <View style={{width:414 , height: 49,alignItems:"center", backgroundColor: "#277C9D"}}>
        <Text style={{fontSize:24, color:"white",alignItems:"center"}}>Todos hamburguers Pizzas Bebidas</Text>
      </View>
      <View style={{width:414,height:49, alignItems:"center", backgroundColor: "#90B7C1"}}>
        <Text style={{fontSize:24, color:"black",alignItems:"center"}}>Hambúrguers</Text>
      </View>
      <View style={{flex:1,width:414,height:49, alignItems:"center", backgroundColor:"white"}}>
        <ScrollView style={{flex:1,backgroundColor:"green", paddingTop:30}}>
          <Text>Pizzas</Text>
          <FlatList data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
          <Text>Hamburguers</Text>
          <FlatList data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
        </ScrollView>
      </View>
    </View> 
  );
}
