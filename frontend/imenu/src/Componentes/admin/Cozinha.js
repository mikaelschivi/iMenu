import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import { useState, useContext } from "react";
import AppContext from '../context/AppContext';
import ListCozinha from '../admin/ListCozinha'

export default function Cozinha(){
    
    const {ordersDone} = useContext(AppContext)

    const [lanche,setLanche] = useState([])

    for (let i = 0; i < ordersDone.length; i++) {
        setLanche(lanche => [...lanche, ordersDone[i]]);
    console.log("lANCHE ", lanche)
    }

    return (
        <View style={styles.fundo}>
            <FlatList data={lanche}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({item})=> <ListCozinha data={item} />} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "#90B7C1",
        height: '100%'
    }
})


//  <View style={styles.pedido}>
//                 <View style={styles.lanches}>
//                 <View style={styles.lanche}>
//                         <View style={styles.nomes}>
//                             <Text style={{ fontSize: 24}}>Xis tudo</Text>
//                         </View>
//                         <View style={styles.qtd}>
//                             <Text style={{ fontSize: 20}}>5</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.mesa}>
//                     <Text style={{ fontSize: 20}}>MESA 1</Text>
//                 </View>
//                 <View style={styles.view_bottom}>
                    
//                     <TouchableOpacity style={
//                         {
//                             backgroundColor: color,  
//                             width:313, height: 68,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             borderRadius: 10
//                         }
//                     } onPress={() => finalizado()}>
//                         <Text style={{ fontSize: 24, color: "#FFFFFF"}}>{text}</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//              pedido 2 
            // <View style={styles.pedido}>
            //     <View style={styles.lanches}>
            //         <View style={styles.lanche}>
            //             <View style={styles.nomes}>
            //                 <Text style={{ fontSize: 24}}>Xis tudo</Text>
            //             </View>
            //             <View style={styles.qtd}>
            //                 <Text style={{ fontSize: 20}}>5</Text>
            //             </View>
            //         </View>
            //         <View style={styles.lanche}>
            //             <View style={styles.nomes}>
            //                 <Text style={{ fontSize: 24}}>Xis tudo</Text>
            //             </View>
            //             <View style={styles.qtd}>
            //                 <Text style={{ fontSize: 20}}>5</Text>
            //             </View>
            //         </View>
            //     </View>
            //     <View style={styles.mesa}>
            //         <Text style={{ fontSize: 20}}>MESA 1</Text>
            //     </View>
            //     <View style={styles.view_bottom}>
                    
            //         <TouchableOpacity style={
            //             {
            //                 backgroundColor: color,  
            //                 width:313, height: 68,
            //                 alignItems: "center",
            //                 justifyContent: "center",
            //                 borderRadius: 10
            //             }
            //         } onPress={() => finalizado()}>
            //             <Text style={{ fontSize: 24, color: "#FFFFFF"}}>{text}</Text>
            //         </TouchableOpacity>
            //     </View>
            // </View>