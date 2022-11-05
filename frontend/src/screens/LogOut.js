import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


const LogOut = ({navigation }) => {
  
  
  /*
  useEffect(() => {
    exit()
  }, [])
  */
  const exit = () => {
    navigation.navigate("LogIn")
  }
  exit()
  return 
  
}

export default LogOut;