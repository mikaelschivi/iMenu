import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from './src/Componentes/Cardapio';
import Prato from './src/Componentes/Prato';
import Inform from './src/Componentes/Inform';
import Adm from './src/Componentes/Adm';
import Initial from "./src/Componentes/Initial";

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
          component={Cardapio}>
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