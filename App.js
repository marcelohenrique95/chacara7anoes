import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { Header } from 'react-native-elements';
import 'react-native-gesture-handler';
Icon.loadFont();


function register() {
  this.props.navigation.navigate("Reserve")
  alert('Confirmar')
}

const reserve = () => {
  navigation.navigate('Reserve');
}

const contact = () => {
  alert('Whatsapp: 9 8123-4218')
}

export default function App({ navigation }) {
  
  return (
      <View style={styles.container} >
        <Header
        
         placement="left"
         leftComponent={{ icon: 'menu', color: '#000000' }}
         
         rightComponent={{ icon: 'home', color: '#000000' }}
         containerStyle={ styles.header }/>
        <StatusBar hidden />
        

        <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            CALENDÁRIO
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => contact()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            CONTATO
        </Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('./assets/chacara-logo.jpg')} />


        <TouchableOpacity style={styles.buttonReserve} onPress={() => navigation.navigate('Reserve')}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            RESERVAR
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => photos()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            FOTOS
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReserve} onPress={() => maps()}>
          <Text style={{ color: 'black', textAlign: 'center' }}>
            MAPA
        </Text>
        </TouchableOpacity>

        <TouchableOpacity   onPress={() => { navigaion }}>
          <Icon name='facebook'
                size= {50}
                color='#3b5998'
                 />
        </TouchableOpacity>

        <View style={styles.viewFooter}>
          <Text style={styles.textAddres}>Jardim Universitário, Cuiabá-MT.</Text>
          </View>
      </View>
  );
}

