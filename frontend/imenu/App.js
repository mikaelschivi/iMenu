import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from './src/Componentes/client/Cardapio';
import Prato from './src/Componentes/client/Prato';
import Inform from './src/Componentes/client/Inform';
import Adm from './src/Componentes/admin/Adm';
import Initial from "./src/Componentes/Initial";
import Add from "./src/Componentes/admin/Add";
import Verify from "./src/Componentes/admin/Verify";
import Delete from "./src/Componentes/admin/Delete"


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initalRouteName="Initial">
        <Stack.Screen 
          name="Initial" 
          component={Initial}
          options={{ headerShown: false
            ,statusBarColor:"#277C9D"}} >
        </Stack.Screen>
        <Stack.Screen 
          name="Cardapio" 
          component={Cardapio}
          options={{ headerShown: false
            ,statusBarColor:"#277C9D"}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Adm" 
          component={Adm} 
          options={{ headerShown: true
                  ,statusBarColor:"#277C9D"}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Prato"
          component={Prato}
          options={{ statusBarColor:"#277C9D"}}>
        </Stack.Screen> 
        <Stack.Screen 
          name="Inform"
          component={Inform}
          options={{ statusBarColor:"#277C9D"}}>
        </Stack.Screen> 
        <Stack.Screen 
          name="Add"
          component={Add}
          options={{ statusBarColor:"#277C9D"}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Verify"
          component={Verify}
          options={{ statusBarColor:"#277C9D"}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Delete"
          component={Delete}
          options={{ statusBarColor:"#277C9D"}}>
        </Stack.Screen>
      </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}