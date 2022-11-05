import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
//import router from './controllers/usersControllers';

const Principal = ({ navigation, route }) => {    
  
  console.log("namecliente_p", route)
  

    return(
      <View style={styles.container }>
        <View style={{ flex: 1, borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.cliente }>HOLA:</Text>
          <Text style={styles.clientetexto }>GUSTAVO AQUINO</Text>
        </View>

        <View style={{ flex: 1, borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.fcontrato }>FECHA DE CONTRATO</Text>
          <Text style={styles.fcontratotexto }>5/11/2022</Text>
        </View>
        
        <View style={{ flex: 1, borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.finicio }>FECHA DE INICIO</Text>
          <Text style={styles.finiciotexto }>5/11/2022</Text>
        </View>
        
        <View style={{ flex: 1, borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.ftermino }>FECHA DE TERMINO</Text>
          <Text style={styles.fterminotexto }>5/11/2022</Text>
        </View>
        
        <View style={{ flex: 1, borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.cdiaria }>CUOTA DIARIA</Text>
          <Text style={styles.cdiariatexto }>5/11/2022</Text>
        </View>
      </View>
    )
}

export default Principal;