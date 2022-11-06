import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
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
        <View style={ styles.bloquesdatos }>
          <Text style={styles.clientetexto }>HOLA: {params.namecliente_p}</Text>
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

    </View>
    )
}

export default Principal;