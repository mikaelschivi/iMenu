import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavegation} from '@react-navigation/native';

export default function List(props,{navigation}){
    
    return(
        <View style={styles.container}>
            <View style={styles.descrition}>
                <Text style={{fontSize:20}}>{props.data.name}</Text>
                <Text style={{fontSize:14}}>{props.data.ingredients}</Text> 
                <Text style={{fontSize:18,color:'#038028'}}>{props.data.price}</Text>
            </View>
            <View style={styles.adiciona}>
                <Image 
                source={{uri: props.data.image}}
                style={{width:65, height:65, borderRadius:15}}
                />
                <View style={styles.funcionalidades}>
                    <TouchableOpacity 
                        onPress={ () => navigation.navigate('Prato')}>
                        <Image 
                        source={{uri: 'https://cdn-icons-png.flaticon.com/512/3444/3444393.png'}}
                        style={{width:30, height:30, borderRadius:15}}
                        /> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => alert('Adicionado ao seu prato')}>
                        <Image 
                        source={{uri: 'https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png'}}
                        style={{width:30, height:30, borderRadius:15}}
                        /> 
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
container:{
    flex:1,
    height:150,
    backgroundColor:"#E9E9E9",
    marginBottom:8,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"space-between",
},
descrition:{
    padding:24,
    justifyContent:"space-between",
    flexDirection:"colum",
    alignItems:"flex-left",
    
},
adiciona:{
    marginRight:14,
    marginTop: 10,
    justifyContent:"space-between",
    marginBottom:15,
},
funcionalidades:{
    marginTop: 10,
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom:15,
},
button:{
    width:100,
    height:30,
    backgroundColor:"#04446C",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center"
},
})