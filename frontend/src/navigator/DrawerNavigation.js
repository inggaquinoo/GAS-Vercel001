import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../screens/principal';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
        // headerShown: false oculta las 3 rayitas de arriba
        <Drawer.Navigator  screenOptions={{ headerShown: true } }>
             <Drawer.Screen name="DentroDrawer"  component={DentroDrawer } />
            {/* <Drawer.Screen name="Principal"  component={Principal } /> */}
        </Drawer.Navigator>
  )
}

export default DrawerNavigation;