import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
//import router from './controllers/usersControllers';

const Principal = ({ navigation, route }) => {    
  
  //console.log("namecliente_p", params.namecliente_p)

  const params = route.params;

  //console.log("namecliente_p", params.namecliente_p)
  

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
      </View>
    )
}

export default Principal;