import React from 'react';
import Home from './src/Home';
import Work from './src/Pages/Work';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContextProvider} from './src/context';

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
          </Stack.Navigator>
        </ThemeProvider>
      </ContextProvider>
    </NavigationContainer>
  );
}
