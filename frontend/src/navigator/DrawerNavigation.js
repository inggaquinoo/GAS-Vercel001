import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
        // headerShown: false oculta las 3 rayitas de arriba
        <Drawer.Navigator  screenOptions={{ headerShown: true } }>
            <Drawer.Screen name="dentroDrawer"  component={dentroDrawer} />
        </Drawer.Navigator>
  )
}

export default DrawerNavigation;