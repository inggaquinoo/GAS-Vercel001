import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DentroDrawer from '../screens/DentroDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
        // headerShown: false oculta las 3 rayitas de arriba
        <Drawer.Navigator  screenOptions={{ headerShown: true } }>
            <Drawer.Screen name="DentroDrawer"  component={DentroDrawer } />
        </Drawer.Navigator>
  )
}

export default DrawerNavigation;