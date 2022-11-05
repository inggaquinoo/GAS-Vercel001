import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


const LogIn = ({ navigation }) => {
  
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
            onPress={()=>navigation.navigate("dentroDrawer")}
            >
                <Text>INGRESAR</Text>
            </TouchableOpacity>  
        </View>
    </View>
    
  )
}

export default LogIn