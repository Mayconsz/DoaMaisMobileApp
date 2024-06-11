import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Pages/Home/Home';
import Listagem from './src/Pages/Listagem/Listagem';
import Contato from './src/Pages/Contato/Contato';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Listagem"
          component={Listagem}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

