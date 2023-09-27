import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from './Componentes/Cardapio';
import Prato from './Componentes/Prato';
import Inform from './Componentes/Inform';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initalRouteName="Cardapio">
        <Stack.Screen 
          name="Cardapio" 
          component={Cardapio} 
          options={{ headerShown: false}}>
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