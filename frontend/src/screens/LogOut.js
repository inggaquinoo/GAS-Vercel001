import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



const LogOut = ({navigation }) => {
  
  
  /*
  useEffect(() => {
    exit()
  }, [])
  */
  const exit = () => {
    navigation.navigate("DrawerNavigation",{
      screen: 'StackNavigator',
      params:{
          screen: 'LogIn'
      }
    })
  }
  

/*
  navigation.navigate('DrawerNavigation',{
    //BottomTabNavigation está dentro de DrawerNavigation
    screen: 'BottomTabNavigation',
    params: {
                //Home esta dentro de BottomTabNavigation el cual
                //está dentro de DrawerNavigation
        screen: 'Profile',
        params: {
                    id:'Login',
                    Names_:name
                }
        
            }
})

*/



  return (
    <View>
        <TouchableOpacity
        onPress={exit}
        >
          <Text>Cerrar Sesión</Text>
        </TouchableOpacity>
    </View>
  )
  
}

export default LogOut;