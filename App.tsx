import React from 'react';
import Home from './src/Home';
import Work from './src/Pages/Work';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Work" component={Work} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
