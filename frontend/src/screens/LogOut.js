import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



const LogOut = ({navigation }) => {
  
  const exit = () => {
    console.log("leyendo funcion exit")
    
    //navigation.navigate("StackNavigator",{
    //  screen: 'LogIn'
    //})

    navigation.navigate('DrawerNavigation',{
      //BottomTabNavigation está dentro de DrawerNavigation
      screen: 'StackNavigator',
      params: {
                  //Home esta dentro de BottomTabNavigation el cual
                  //está dentro de DrawerNavigation
              screen: 'LogIn',
              }
  })
    
  }


  //Javascript siempre esjecuta primero Useeffect, así que
  //no importa en donde lo coloques, siempre se ejecutará primero
  useEffect(() => {
    
    console.log("ejecutando useeffect")
    exit()
  }, [])
  

  
  
 
  

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
        <Text>esta es cerrar sesion</Text>
    </View>
  )
  
}

export default LogOut;