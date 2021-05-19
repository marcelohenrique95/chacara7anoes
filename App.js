import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();


function register(){
  alert('Confirmar')
}

export default function App() {
  
 
  return (
    <View style={styles.container}>
      <StatusBar  hidden/>
      <Image style={styles.image} source={require('./assets/chacara-logo.jpg')} />
      <Text style={styles.text}>Nome</Text>
      <TextInput placeholder='Digite seu nome completo..' style={styles.inputText} />
      <Text style={styles.text}>Telefone</Text>
      <TextInput placeholder='Telefone para contato com DDD' style={styles.inputText} />
      <Text style={styles.text}>NºPessoas</Text>
      <TextInput keyboardType='numeric' placeholder='Qtd' style={styles.inputTextNumber} />
      
      <TouchableOpacity style={styles.buttonCheck} onPress={()=>register()}>
        <Text style={{color:'black', textAlign:'center'}}>
          RESERVAR
        </Text>
      </TouchableOpacity>
      <Image style= {styles.image2} source={require('./assets/chac-img.jpeg')}/>
 

      <TouchableOpacity style={styles.buttonSocial} >
        <Icon name="facebook" size={50} color="white" />
      </TouchableOpacity>
      <Text style={styles.textAddres}>Jardim Universitário, Cuiabá-MT . (65)98123-4218</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width:300,
    height: 150,
  },

  image2: {
    width: 400,
    height: 400,
    
  },
  inputText: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 15
  },
  inputPhone: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    color: 'blue'
  },
  inputTextNumber: {
    width: '30%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 15,
    marginRight: '70%'
  },
  buttonCheck: {
    backgroundColor: '#a35655',
    width: '50%',
    height: 40,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent: 'center'
  },
  buttonSocial: {
    backgroundColor: '#a35655',
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    marginTop: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  },
  text: {
    backgroundColor: '#000000',
    color: 'white',
    width: 80,
    height: 15,
    marginBottom: 10,
    marginRight: '70%'
  },
  textAddres: {
    backgroundColor: '#000000',
    color: '#a35655',
    width: 'auto',
    height: 'auto',
    marginLeft: 'auto'
  },
  icon: {
    
  }
});
