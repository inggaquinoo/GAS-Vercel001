import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../screens/Principal';
import LogOut from '../screens/LogOut';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
        // headerShown: false oculta las 3 rayitas de arriba
        <Drawer.Navigator  screenOptions={{ headerShown: true } }>
             <Drawer.Screen name="Principal"  component={Principal} options={{ title: "SOFEN APP" }} />
             <Drawer.Screen name="LogOut"  component={LogOut} options={{ title: "Cerrar Sesión" }} />
        </Drawer.Navigator>
  )
}

export default DrawerNavigation;