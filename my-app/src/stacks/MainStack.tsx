import React from "react";
import Preload from '../screens/Preload';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
// import Cadastro from "../screens/Cadastro";
import { enableScreens } from 'react-native-screens';
import { View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

enableScreens();

type MainStackParamList = {
    Login: undefined;
    // Cadastro: undefined;
    Preload: undefined;
  };
  
const Stack = createNativeStackNavigator<MainStackParamList>();

 function MainStack ()  {
    return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} 
           options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Cadastro" component={Cadastro} /> */}
        <Stack.Screen name="Preload" component={Preload} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default MainStack;
