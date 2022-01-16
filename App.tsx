import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContextProvider} from './src/context';

import College from './src/Pages/College';
import Work from './src/Pages/Work';
import Home from './src/Home';

import theme from './src/global/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Work" component={Work} />
            <Stack.Screen name="College" component={College} />
          </Stack.Navigator>
        </ThemeProvider>
      </ContextProvider>
    </NavigationContainer>
  );
}
