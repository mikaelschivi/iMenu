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
import Hamburguer from "./src/Componentes/admin/Hamburguer";
import Pizza from "./src/Componentes/admin/Pizza";
import Bebida from "./src/Componentes/admin/Bebida";


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
          options={{ headerShown: true
            ,statusBarColor:"#277C9D"}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Adm" 
          component={Adm} 
          options={{ headerShown: true
                  ,headerStyle: {
                    backgroundColor: '#277C9D',
                  },
                  headerTintColor: '#fff'}}>
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
          name="Adicionar Produto"
          component={Add}
          options={{ headerStyle: {
            backgroundColor: '#277C9D',
          },
          headerTintColor: '#fff'}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Ver os Produtos"
          component={Verify}
          options={{ headerStyle: {
            backgroundColor: '#277C9D',
          },
          headerTintColor: '#fff'}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Hamburguer"
          component={Hamburguer}
          options={{ headerStyle: {
            backgroundColor: '#277C9D',
          },
          headerTintColor: '#fff'}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Pizza"
          component={Pizza}
          options={{ headerStyle: {
            backgroundColor: '#277C9D',
          },
          headerTintColor: '#fff'}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Bebida"
          component={Bebida}
          options={{ headerStyle: {
            backgroundColor: '#277C9D',
          },
          headerTintColor: '#fff'}}>
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