import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
//import router from './controllers/usersControllers';

const Users = () => {    
  const [users, setUsers] = useState([]);
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')  

  const [showuser, setShowuser] = useState('')
  const [showfechacontrato, setShowfechacontrato] = useState('')
  const [showfechainicio, setShowfechainicio] = useState('')
  const [showfechatermino, setShowfechatermino] = useState('')
  const [showcuotadiaria, setShowcuotadiaria] = useState('')
  
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
                break;
              }
              else
              {
                console.log("USUARIO NO ENCONTRADO ó NO TIENE CRÉDITO ASIGNADO")
              }
            }
        }//FIN DEL FOR
      
      setShowuser(namecliente)
      setShowfechacontrato(datestart)
      setShowfechainicio(datebegin)
      setShowfechatermino(dateend)
      setShowcuotadiaria(dailypay)

      return (
        showuser,
        showfechacontrato,
        showfechainicio,
        showfechatermino,
        showcuotadiaria
      )
    }//Fin de funcion fetchcustomer

    return(
        /*
        <View>
            {users.map((user, index) =>
                <Text key={index}>{ user }</Text>
            )}
        </View>
            */
            <View>
            <Text
              style={{ 
                  fontSize: 40,
                  fontWeight: 'bold'
               }}
            >Form Query</Text>
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
                  onPress={()=>fetchcustomer()}
                  >
                      <Text style={{ fontSize: 40 }}>INGRESAR</Text>
                  </TouchableOpacity>  
              </View>
              <View>
                  <Text>CLIENTE: {showuser}</Text>
                  <Text>FECHA DE CONTRATO: {showfechacontrato}</Text>
                  <Text>FECHA DE INICIO: {showfechainicio}</Text>
                  <Text>FECHA DE TERMINO: {showfechatermino}</Text>
                  <Text>CUOTA DIARIA: {showcuotadiaria}</Text>
              </View>
          </View>
    )
}

//{listItems.map((item, index)) => <li key={index}>{item}</li>}
/*
const Users = () => {
  return (
    <View>
      <Text>Users</Text>
    </View>
  )
}
*/
export default Users;