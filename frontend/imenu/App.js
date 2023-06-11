import React from 'react';
import {NavigationContainer, createNativeStackNavigator} from '@react-navigation/native';
import Cardapio from './Componentes/Cardapio';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName = "Cardapio">
        <Stack.Screen name = "Cardapio" component={Cardapio}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}