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

      var encontroclave = false;
      var positionnombre;
      var positioncontrato;
      var positioninicio;
      var positiontermino;
      var positioncuotadiaria;

      var namecliente;
      var datestart;
      var datebegin;
      var dateend;
      var dailypay;
      
      //console.log("YEAH BABY : ",users[0])
      //console.log("YEAH BABY : ",users)
      console.log("holazzzz ")
      //dataarraysolution = new Array;
      
      //dataarraysolution = users
      //console.log("dataarraysolution: ",dataarraysolution)
      console.log("users: ",users[0][1])
      console.log("users: ",users[0].length)
      
      
      for (var i=0; i<users[0].length; i++ )
      {
        //if (password === users[0][i]){
        if ("GUSTAVO AQUINO BABY BABY CHIIII 444 555" === users[0][i]){
          encontroclave = true;
          console.log("AJAP tavo : ",encontroclave)
        }
      }
      
      
      /*
      for (var i=0; i<229; i++ )
      {
          if (usuario === users[0][i] && encontroclave === true){
              positionnombre = i - 5;
              console.log("NOMBRE: ",users[0][positionnombre])
              namecliente = users[0][positionnombre]

              positioncontrato = i - 4
              console.log("FECHA CONTRATO: ",users[0][positioncontrato])
              datestart = users[0][positioncontrato]

              positioninicio = i - 3
              console.log("FECHA DE INICIO: ",users[0][positioninicio])
              datebegin = users[0][positioninicio]

              positiontermino = i - 2
              console.log("FECHA DE TERMINO: ",users[0][positiontermino])
              dateend = users[0][positiontermino]

              positioncuotadiaria = i - 1
              console.log("CUOTA DIARIA: ",users[0][positioncuotadiaria])
              dailypay = users[0][positioncuotadiaria]
              break;
          }
          else{
            console.log("Usuario No encontrado!")
            
          }
      }
      */
      setShowuser(namecliente)
      setShowfechacontrato(datestart)
      setShowfechainicio(datebegin)
      setShowfechatermino(dateend)
      setShowcuotadiaria(dailypay)

   /*
     users.map(function(user){
                  //console.log(user[0,2])
                  return user;
              })
    */
      return (
        showuser

      )
    }

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
                      <Text style={{  fontSize: 40 }}>INGRESAR</Text>
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