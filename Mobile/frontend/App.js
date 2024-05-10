// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Patient from './pages/medicaldetails';
import Vaccine from './pages/vaccine'




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage}  />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="medical" component={Patient}/>
        <Stack.Screen name="vaccine" component={Vaccine}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
