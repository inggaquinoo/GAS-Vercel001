import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


const LogIn = ({ navigation, route }) => {
  
  const [users, setUsers] = useState([]);
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('') 

  useEffect(() => {
    //fetch("/users/")
    //fetch("https://polar-forest-95712.herokuapp.com/users/")
    fetch("http://192.168.1.24:3001/users/") //PARA TRABAJAR EN LOCAL
    //fetch("http://localhost:3001/users/")
          .then(res => {
              if(res.ok){
                  return res.json()
              }
          })
          .then(jsonRes => setUsers(jsonRes.usersList))

  }, [])


  const fetchcustomer = () => {
console.log("aqui tamoss-2!!!")

    //fetch("https://polar-forest-95712.herokuapp.com/users/")
    fetch("http://192.168.1.24:3001/users/") //PARA TRABAJAR EN LOCAL
    //fetch("http://localhost:3001/users/")
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(jsonRes => setUsers(jsonRes.usersList))

      var namecliente;
      var datestart;
      var datebegin;
      var dateend;
      var dailypay;
      
      //VALIDANDO QUE USUARIO Y CLAVE NO ESTEN VACÍOS
      for (var i=0; i<users[0].length; i++ )
        {
          if(usuario === "" || password === "" )
          {
            console.log("DEBE INGRESAR USUARIO Y CLAVE")
            break;
          }
          else  
          { 
            if (usuario === users[0][i] && password === users[0][i + 1] && "ACTIVO" === users[0][i - 1]){
                console.log("ACCESO CONCEDIDO")
                namecliente = users[0][i-6] //Nos da el nombre real
                datestart = users[0][i-5] //Nos da la fecha de contrato
                datebegin = users[0][i-4] //Nos da la fecha de inicio
                dateend = users[0][i-3] //Nos da la fecha de termino
                dailypay = users[0][i-2] //Nos da la cuota diaria
                navigation.navigate("DrawerNavigation",{
                  screen: 'Principal',
                  params: {
                    namecliente_p: namecliente,
                    datestart_p: datestart,
                    datebegin_p: datebegin,
                    dateend_p: dateend,
                    dailypay_p: dailypay
                }
                })
                break;
              }
              else
              {
                console.log("USUARIO NO ENCONTRADO ó NO TIENE CRÉDITO ASIGNADO")
              }
            }
        }//FIN DEL FOR
      

      return 

      
    }//Fin de funcion fetchcustomer




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
                onChangeText={(value) => setUsuario(value)}
            ></TextInput>
      </View>
      <View>
            <Text>Clave: </Text>
            <TextInput 
                style={{backgroundColor: 'red'}}
                placeholder = 'Clave'
                onChangeText={(value) => setPassword(value)}
            ></TextInput>
      </View>
      <View>
            <TouchableOpacity
            onPress={fetchcustomer}
            >
                <Text>INGRESAR</Text>
            </TouchableOpacity>  
        </View>
    </View>
    
  )
}

export default LogIn