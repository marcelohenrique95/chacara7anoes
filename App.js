import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
Icon.loadFont();


function register() {
  this.props.navigation.navigate("Reserve")
  alert('Confirmar')
}

export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <View style={styles.container} >
        <StatusBar hidden />
        <Image style={styles.image} source={require('./assets/chacara-logo.jpg')} />
        
        <Button
          title="TESTE NAVIGATION"
          onPress={() =>
            navigation.navigate("Reserve")
          }
        />

        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            CALENDÁRIO
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            CONTATO
        </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            RESERVAR
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            FOTOS
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            MAPA
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebook}  onPress={() => { navigaion }}>
          <Icon name="google" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebook} onPress={() => { navigaion }}>
          <Icon name="facebook" size={50} color="white" />
        </TouchableOpacity>
        <Text style={styles.textAddres}>Jardim Universitário, Cuiabá-MT . (65)98123-4218</Text>

      </View>
    </NavigationContainer>
  );
}

