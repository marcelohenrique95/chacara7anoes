import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { Header, Card } from 'react-native-elements';
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

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

export default function App({ navigation }) {

  return (
    <View style={styles.container} >

      <StatusBar hidden />

      <Image style={styles.image} source={require('./assets/chacara-logo.jpg')} />

      <Card containerStyle={styles.card}>
        <Card.Title>Natal 2021 - R$ 2.500,00</Card.Title>
        <Card.Divider />
        <Card.Image source={require('./assets/chac-img.jpeg')}/>
        <Text >
           Dia 24/12(Sexta) até o dia 26/12(Domingo) - 3 Dias
          </Text> 
          <Button buttonStyle={styles.cardButton}
            title='Reservar agora' />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>Carnaval 2022 - R$ 2.800,00</Card.Title>
        <Card.Divider />
        <Card.Image source={require('./assets/chac-img3.jpeg')}/>
        <Text>
           Carnaval 2022 disponível por apenas R$ 2.800,00
          </Text> 
          <Button buttonStyle={styles.cardButton}
            title='Reservar agora' />
      </Card>

      <TouchableOpacity onPress={() => { navigaion }}>
        <Icon name='facebook'
          size={50}
          color='#3b5998'
        />
      </TouchableOpacity>

      <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => contact()}>
          <Icon
            name='phone'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => maps()}>
          <Icon
            name='photo'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => maps()}>
          <Icon
            name='event-available'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => maps()}>
          <Icon
            name='search'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => maps()}>
          <Icon
            name='place'
            size={40}
            color='#4fc4af'


          />
        </TouchableOpacity>

      </View>
    </View>
  );
}

