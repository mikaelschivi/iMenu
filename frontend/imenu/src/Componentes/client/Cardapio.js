import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,FlatList, ScrollView, VirtualizedList, ImageBackground, SafeAreaView} from 'react-native';
import { useEffect,useState} from 'react';
import List from "./List";

export default function Cardapio({navigation}) {
  // url images 
  const imgPrato = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c55e.png"
  const imgBackground = "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg"

  const [pizza,setPizza] = useState([])
  const [hamburgueres,setHamburgueres] = useState([])
  
  //Get com fetch
  useEffect(() => {
    setPizza([])
    setHamburgueres([])
    const fetchData = async () => {
      const response = await fetch("http://192.168.42.55:3000/api/findAllItems/")
        try {
          const responseJson = await response.json()
          console.log("Items",responseJson.items)
          for (let i = 0; i < responseJson.items.length; i++) {
            if (responseJson.items[i].class == "pizza") {
              setPizza(pizza => [...pizza, responseJson.items[i]]);
            }
            else if (responseJson.items[i].class == "hamburguer") {
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
    <View style={styles.view1}>   
      {/* View da imagem de cabecalho */}
      <ImageBackground source={{uri:imgBackground}}
         style={styles.image1}>
        {/* Go to Prato */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Prato')}>
          <Image style={styles.imagePrato}  source={{uri:imgPrato}}/>
          </TouchableOpacity>
      </ImageBackground>
      {/* Options*/}
      <View style={styles.view2}>
          <ScrollView horizontal={true}>
            <Text style={styles.options}>
              Todos      Hamburguers      Pizzas      Bebidas</Text>
          </ScrollView>
      </View>
      {/* Items*/}
      <View style={styles.view3}>
        {/* <ScrollView style={styles.viewScroll}> */}
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.titulo}>Pizzas</Text>
          <FlatList data={pizza}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> <List data={item} />} 
          />
          <Text style={styles.titulo}>Hamburguers</Text>
          <FlatList data={hamburgueres}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> <List data={item} />} 
          />
          <Text style={styles.titulo}>Bebidas</Text>
          {/* <FlatList data={bebidas}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> <List data={item} />}
          /> */}
        {/* </ScrollView> */}
        </SafeAreaView>
      </View>
    </View> 
  );
}


const styles = StyleSheet.create({
  titulo:{
    fontWeight: 'bold',
    marginLeft: 17,
    fontSize: 18,
  },
  options: {
    fontSize: 22, 
    color:"white",
    alignItems:"center",  
    // justifyItems:"center",
    marginLeft:10,
    marginTop:6,
  },
  image1: {
    width:414,
    height:150, 
    alignItems:"flex-end", 
    backgroundColor: '#90B7C1'
  },
  imagePrato: {
    width:100,
    height:50,
    marginTop:20,
    marginRight:10
  },
  view1: {
    flex:1, 
    alignItems:"center"
  },
  view2: {
    width:414 , 
    height: 49,
    alignItems:"center", 
    backgroundColor: "#277C9D"
  },
  view3: {
    flex:1,
    width:414,
    height:49, 
    backgroundColor:"white"
  },
  viewScroll: {
    flex:1,
    backgroundColor:"#90B7C1", 
    paddingTop:10
  },
})