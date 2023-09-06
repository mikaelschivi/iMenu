import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, Button, ImageBackground} from 'react-native';
import { useEffect,useState } from 'react';
import List from "./List";

export default function Cardapio({navigation}) {

  const pizza = [{
      nome:"Pizza Bacon", 
      descrição:"bacon, ovo, ...",
      id:0,
      preco:"R$ 60,00",
      img:"https://static.itdg.com.br/images/1200-630/c0402ec0fd16e13c7b7b691151d53e1d/277814-original.jpg"
    },
    {
      nome:"Pizza de File",
      descrição:"bacon, ovo, ...",
      id:1,
      preco:"R$ 60,00",
      img:"https://www.picanhacia.com.br/wp-content/uploads/2017/01/11379225_1180312101994735_933388139_n-15.jpg"
    }]

  const hamburguer = [{
      nome:"Tradicionale", 
      descrição:"Carne,cheedar, tomate, alface",
      id:0,
      preco:"R$ 30,00",
      img:"https://riosoftice.com.br/wp-content/uploads/2023/06/Pao-de-Hamburguer-Tradicional-G-CT-03.jpg"
    },
    {
      nome:"Duplo",
      descrição:"Dois hamburgueres,cheedar,cebola",
      id:1,
      preco:"R$ 38,00",
      img:"https://delivery.sitemarketing.com.br/wp-content/uploads/2021/08/zulu-fernando-UM4d6RsrkmM-unsplash-scaled.jpg"
    }]
  
  const bebidas = [{
      nome:"Coca 2L", 
      descrição:"bacon, ovo, ...",
      id:0,
      preco:"R$ 10,00",
      img:"https://giassi.vtexassets.com/arquivos/ids/644028-800-450?v=638211558933330000&width=800&height=450&aspect=true"
    },
    {
      nome:"Guarana 2L",
      descrição:"bacon, ovo, ...",
      id:1,
      preco:"R$ 09,00",
      img:"https://giassi.vtexassets.com/arquivos/ids/635065/Refrigerante-Guarana-Antarctica-Garrafa-2l.png?v=638203846615870000"
    }]


  return (
    <View style={{flex:1, alignItems:"center"}}>   
      {/* View da imagem de cabecalho */}
      <ImageBackground source={{uri:"https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg"}}
         style={{width:414,height:150, alignItems:"flex-end", backgroundColor: '#90B7C1'}}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Prato')}>
          <Image style={{width:50,height:50,marginTop:20,marginRight:10}}
          source={{uri:"https://img2.gratispng.com/20180408/jfw/kisspng-tableware-plate-platter-tray-kitchen-tableware-5aca2df992d172.3316237515231994816014.jpg"}}/> 
          </TouchableOpacity>
      </ImageBackground>
      {/* Variedade de opcoes */}
      <View style={{width:414 , height: 49,alignItems:"center", backgroundColor: "#277C9D"}}>
        <Text style={{fontSize:24, color:"white",alignItems:"center"}}>Todos hamburguers Pizzas Bebidas</Text>
      </View>

        
      
        
      {/* Subitem Pizzas */}
      {/* <View style={{width:414,height:49, backgroundColor: "#90B7C1", alignItems:"flex-start"}}>
        <Text style={{fontSize:24, color:"black",marginLeft:30}}>Pizzas</Text>
      </View> */}
      {/* View dos itens disponiveis */}
      <View style={{flex:1,width:400,height:49, backgroundColor:"white"}}>
        <ScrollView style={{flex:1,backgroundColor:"#90B7C1", paddingTop:10}}>
          <Text style={styles.titulo}>Hamburguers</Text>
          <FlatList data={hamburguer}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
          <Text style={styles.titulo}>Pizzas</Text>
          <FlatList data={pizza}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
          <Text style={styles.titulo}>Bebidas</Text>
          <FlatList data={bebidas}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <List data={item} />} 
          />
        </ScrollView>
      </View>
    </View> 
  );
}



const styles = StyleSheet.create({
  titulo:{
    fontWeight: 'bold',
    marginLeft: 17,
    fontSize: 18,
  }
})