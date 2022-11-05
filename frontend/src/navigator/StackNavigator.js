import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import LogOut from '../screens/LogOut';
import DrawerNavigation from './DrawerNavigation';
import { View, Text } from 'react-native'
import DentroDrawer from '../screens/DentroDrawer';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    // headerShown: false -> oculta el encabezado de arriba del stack
      <Stack.Navigator  screenOptions={{ headerShown: true } } >
        <Stack.Screen name="Login"  options={{ title: "Sofeen APP" }} component={LogIn} />
        <Stack.Screen name="Logout" component={LogOut} />
        { /* <Stack.Screen name="DentroDrawer" component={DentroDrawer} /> */ }
              
        {/* <Stack.Screen name="BottomTabNavigation" options={{ title: "Hoshii Partners" }} component={BottomTabNavigation} />  */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        
      </Stack.Navigator>
  )
}

export default StackNavigator;