import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const LogOut = ({navigation }) => {
  
  
  /*
  useEffect(() => {
    exit()
  }, [])
  */
  const exit = () => {
    navigation.navigate("LogIn")
  }
  

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