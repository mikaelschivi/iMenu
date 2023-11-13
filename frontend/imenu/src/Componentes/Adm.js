import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, } from "react-native";
import { useState, useEffect } from "react";


export default function Admin({navigation}) {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [ingredients,setIngredients] = useState([''])

    const [data,setData] = useState([])

    //Get com fetch
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://192.168.42.175:3000/api/findItemById/651a0776dd20690d6d98555b/")
            try {
              const responseJson = await response.json()
              setName(responseJson.user.name)
              setPrice(responseJson.user.price)
              setIngredients(responseJson.user.ingredients)
              setData(responseJson);
            }
            catch (error) {
              console.log(error)
            }
        }
          fetchData();
      }, []);
   

    // const axiosPost = (e) => {
    //     e.preventDefault()

    //     axios.post('http://localhost:3000/api/createItem', data)
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
        
    //     setName('')
    //     setPrice('')
    //     setIngredients('')
    // }

    return (
        <View style={{flex:1,flexDirection: "colunm",justifyContent: "center",backgroundColor:"#90B7C1" }}>
            <View style={styles.fundo}>

            {/* Tela de adicionar item */}

                {/* <Text value={name}></Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Name" 
                    onChangeText={setName}
                    value={name}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Ingridients"
                    onChangeText={setIngredients}
                    value={ingredients}/>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={setPrice}
                    value={price}
                    placeholder="Price"
                    keyboardType="numeric"/> */}




                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Add')}>
                    <Text style={styles.text_a}>Adicionar</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Verify')}>
                    <Text style={styles.text_a}>Verificar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Delete')}>
                    <Text style={styles.text_a}>Deletar</Text>
                </TouchableOpacity>

                </View>
            </View>
    )
}


const styles = StyleSheet.create({
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
        backgroundColor: "#009427",
        marginTop: 15,
        width:200,
        height:60,
        borderRadius: 20,
        justifyContent: "flex-start",
        alignItems: "center",   
    },
    text_a:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,

    }
  })
