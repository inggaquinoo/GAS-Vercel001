import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const LogIn = ({ navigation, route }) => {

  const [users, setUsers] = useState([]);
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('') 

  const llenararraydatos = async () => {
    //fetch("https://polar-forest-95712.herokuapp.com/users/")
    await fetch("http://192.168.1.24:5000/users/") //PARA TRABAJAR EN LOCAL
    //fetch("http://localhost:3001/users/")
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(jsonRes => setUsers(jsonRes.usersList))
  }


  const fetchcustomer = async() => {
      var namecliente;
      var datestart;
      var datebegin;
      var dateend;
      var dailypay;
      var numcuotas;
      var cantcuotaspagadas;
      noencontrado_credito = false;
      
      //VALIDANDO QUE USUARIO Y CLAVE NO ESTEN VACÍOS

/*
      console.log("users[0]: ",users.length)
      console.log("INICIAL: ",users[0][0])
      console.log("FINAL: ",users[0][2289])
      console.log("usuario ",usuario)
      console.log("password ",password)
*/
      if(usuario === "" || password === "" )
          {
            Alert.alert('ADVERTENCIA','Debe ingresar Usuario y Clave',[
              {text: 'OK', /*onPress: () => console.log("BOTON: Debe ingresar Usuario y Clave") */}
             ])
          }
      else  
          { 
            for (var i=0; i<users[0].length; i++ )
            {
              if (usuario === users[0][i] && password === users[0][i + 1] && "ACTIVO" === users[0][i - 3]){
                  //console.log("ACCESO CONCEDIDO")
                  namecliente = users[0][i-8] //Nos da el nombre real
                  datestart = users[0][i-7] //Nos da la fecha de contrato
                  datebegin = users[0][i-6] //Nos da la fecha de inicio
                  dateend = users[0][i-5] //Nos da la fecha de termino
                  dailypay = users[0][i-4] //Nos da la cuota diaria
                  numcuotas = users[0][i-2] //Nos da el numero de cuotas del credito
                  cantcuotaspagadas = users[0][i-1] //Nos da cuantas cuotas va pagando el cliente
                  console.log(namecliente,datestart,datebegin,dateend,dailypay, numcuotas, cantcuotaspagadas )
                  setUsuario("")
                  setPassword("")
                  noencontrado_credito = false;
                  navigation.navigate("DrawerNavigation",{
                    screen: 'Principal',
                    params: {
                      namecliente_p: namecliente,
                      datestart_p: datestart,
                      datebegin_p: datebegin,
                      dateend_p: dateend,
                      dailypay_p: dailypay,
                      numcuotas_p: numcuotas,
                      cantcuotaspagadas_p: cantcuotaspagadas
                            }
                            })
                  break;
                }
                else
                {
                  var noencontrado_credito = true
                }
              }//FIN DEL FOR
            
              if (noencontrado_credito === true){
                setUsuario("")
                setPassword("")  
                Alert.alert('INFORMACIÓN','Usuario no encontrado ó No tiene crédito asignado',[
                    {text: 'OK'}
                  ]);
                  
              }
            }//FIN DEL ELSE
      return 
    }//Fin de funcion fetchcustomer

    useEffect(() => {
      //console.log("EMPEZANDO USEEFFECT...")
        llenararraydatos();
      //console.log("FINALIZANDO USEEFFECT...")
    }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{
          width: '100%',
          height: '50%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: 'hidden'
        }}>
          <Image
            source={require('../assets/images/imagenlogin.png')}
            style={{
              height: '100%',
              width: '100%'
            }}
            />
        </View>
        
        <View style={{ flex: 1, backgroundColor: 'black' }}>
              <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Usuario</Text>
                    <TextInput 
                        style={{backgroundColor: 'white'}}
                        placeholder = 'Usuario'
                        onChangeText={(value) => setUsuario(value)}
                        value = {usuario}
                    ></TextInput>
              </View>
              <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >Clave</Text>
                    <TextInput 
                        style={{backgroundColor: 'white'}}
                        placeholder = 'Clave'
                        onChangeText={(value) => setPassword(value)}
                        value = {password}
                        secureTextEntry={false}
                    ></TextInput>
              </View>
              <View>
                  <TouchableOpacity
                        style={{
                                backgroundColor: 'blue',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 150,
                                marginTop: 10,
                                marginLeft: 130,
                      }}
                          onPress={fetchcustomer}
                        >
                      <View>
                          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>INGRESAR</Text>
                      </View>    
                  </TouchableOpacity>
              </View>
        </View>
    </View>
  )
}

export default LogIn;