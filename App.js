
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cartpage from './Cartpage';
import Home from './Home';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="cart" component={Cartpage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


