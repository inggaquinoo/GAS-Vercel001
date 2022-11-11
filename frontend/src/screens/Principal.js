import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import { styles } from '../theme/appTheme';

const Principal = ({ navigation, route }) => {    
  
  const params = route.params;
  //console.log("namecliente_p", params.namecliente_p)

  const salir = () => {
    Alert.alert('PREGUNTA','Está seguro que desea salir?',[
      {text: 'SI', onPress: () => navigation.navigate("LogIn")},
      {text: 'NO'}
    ]);
  }

    return(
      <View style={styles.container }>
        
        <ImageBackground 
            source={require('../assets/images/imagenadentro3.png')}
            
            style={{
              width: '100%',
              height: 600,
            }}>
              
          
            <View style={ styles.bloquesdatos }>
              <Text style={styles.clientetexto }>HOLA: TAVO</Text>
            </View>
          
            <View style={styles.bloquesdatos}>
              <Text style={styles.fcontrato }>FECHA DE CONTRATO</Text>
              <Text style={styles.fcontratotexto}>10//11/2022</Text>
            </View>
            
            <View style={styles.bloquesdatos}>
              <Text style={styles.finicio }>FECHA DE INICIO</Text>
              <Text style={styles.finiciotexto }>11//11/2022</Text>
            </View>
            
            <View style={styles.bloquesdatos}>
              <Text style={styles.ftermino }>FECHA DE TERMINO</Text>
              <Text style={styles.fterminotexto }>18//11/2022</Text>
            </View>
            
            <View style={styles.bloquesdatos}>
              <Text style={styles.cdiaria }>CUOTA DIARIA</Text>
              <Text style={styles.cdiariatexto }> S/. 30.00 </Text>
            </View>

            <View style={styles.bloquesdatos}>
              <Text style={styles.cdiaria }>CUOTAS PAGADAS</Text>
              <Text style={styles.cdiariatexto }>28/30</Text>
            </View>
          </ImageBackground>

            <View style={styles.bloquesdatos}>
              <TouchableOpacity
              style={{ 
                backgroundColor: 'blue',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 150,
                marginTop: 30,
                marginLeft: 130,
              }}
              onPress={salir}
              >
                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>SALIR</Text>
              </TouchableOpacity>
            </View>
         


        





         {/*
        <View style={{
                  flex: 1, 
                  borderWidth: 1, 
                  borderColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
        }}>
        
            <Image
                source={require('../assets/images/imagenadentro2.png')}
                style={{
                  height: '100%',
                  width: 80,
                  //width: 130,
                }}
                />
          
          <Text style={{
                   color: 'yellow',
                   fontWeight: 'bold',
                   marginLeft: 3                   
          }}>HOLA: {params.namecliente_p}</Text>
        </View>
      
       <View style={styles.bloquesdatos}>
          <Text style={styles.fcontrato }>FECHA DE CONTRATO</Text>
          <Text style={styles.fcontratotexto}>{params.datestart_p}</Text>
        </View>
        
        <View style={styles.bloquesdatos}>
          <Text style={styles.finicio }>FECHA DE INICIO</Text>
          <Text style={styles.finiciotexto }>{params.datebegin_p}</Text>
        </View>
        
        <View style={styles.bloquesdatos}>
          <Text style={styles.ftermino }>FECHA DE TERMINO</Text>
          <Text style={styles.fterminotexto }>{params.dateend_p}</Text>
        </View>
        
        <View style={styles.bloquesdatos}>
          <Text style={styles.cdiaria }>CUOTA DIARIA</Text>
          <Text style={styles.cdiariatexto }>S/. {params.dailypay_p}</Text>
        </View>

        <View style={styles.bloquesdatos}>
          <Text style={styles.cdiaria }>CUOTAS PAGADAS</Text>
          <Text style={styles.cdiariatexto }>{params.cantcuotaspagadas_p} / {params.numcuotas_p} </Text>
        </View>

        <View style={styles.bloquesdatos}>
          <TouchableOpacity
          style={{ 
            backgroundColor: 'blue',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 150,
            marginTop: 30,
            marginLeft: 130,
          }}
          onPress={salir}
          >
            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>SALIR</Text>
          </TouchableOpacity>
        </View>
        */}
    </View>
    )
}

export default Principal;