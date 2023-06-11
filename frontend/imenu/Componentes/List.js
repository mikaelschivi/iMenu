import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavegation} from '@react-navigation/native';

export default function List(props){
    const navigation = useNavegation();
    
    return(
        <View style={styles.container}>
            <View style={styles.sup}>
            <Image 
            source={{uri: props.data.img}}
            style={{width:55, height:55, borderRadius:30}}
            />
            <Text style={{marginLeft:15, fontSize:16}}>{props.data.nome}</Text>
            </View>
            <Text style={{marginHorizontal:24}}>{props.data.descrição}</Text>   
        </View >
    )
}


const styles = StyleSheet.create({
container:{
    flex:1,
    height:150,
    backgroundColor:"#E9E9E9",
    marginBottom:8
},
sup:{
    padding:24,
    flexDirection:"row",
    alignItems:"center",
    
},
button:{
    width:100,
    height:30,
    backgroundColor:"#04446C",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center"
}
})