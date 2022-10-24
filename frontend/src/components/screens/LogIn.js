import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const LogIn = () => {
  

  
  
  return (
    <View>
      <Text
        style={{ 
            fontSize: 40,
            fontWeight: 'bold'
         }}
      >LogIn</Text>
      <View>
            <Text>Usuario: </Text>
            <TextInput 
                style={{backgroundColor: 'red'}}
                placeholder = 'Usuario'
            ></TextInput>
      </View>
      <View>
            <Text>Clave: </Text>
            <TextInput 
                style={{backgroundColor: 'red'}}
                placeholder = 'Clave'
            ></TextInput>
      </View>
      <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Users")}
            >
                <Text>INGRESAR</Text>
            </TouchableOpacity>  
        </View>
    </View>
    
  )
}

export default LogIn