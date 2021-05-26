import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { Card } from 'react-native-elements';
import 'react-native-gesture-handler';
Icon.loadFont();


export default function Home({ navigation })  {

  const reserve = () => {
    navigation.navigate('Reserve');
  }
  const photo = () => {
    navigation.navigate('Photos')
  }
  
  const contact = () => {
    alert('Whatsapp: 9 8123-4218')
  }
  return (
    <View style={styles.container} >

      <StatusBar hidden />

      <Image style={styles.image} source={require('./../../assets/chacara-logo.jpg')} />

      <Card containerStyle={styles.card}>
        <Card.Title>Natal 2021 - R$ 2.500,00</Card.Title>
        <Card.Divider />
        <Card.Image source={require('./../../assets/chac-img.jpeg')} />
        <Text >
          Dia 24/12(Sexta) até o dia 26/12(Domingo) - 3 Dias
          </Text>
        <Button buttonStyle={styles.cardButton}
          title='Reservar agora' />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>Carnaval 2022 - R$ 2.800,00</Card.Title>
        <Card.Divider />
        <Card.Image source={require('./../../assets/chac-img3.jpeg')} />
        <Text>
          Carnaval 2022 disponível por apenas R$ 2.800,00
          </Text>
        <Button buttonStyle={styles.cardButton}
          title='Reservar agora' />
      </Card>
      <View style={styles.viewSocial}>
        <TouchableOpacity style={styles.buttonSocial} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5565981234218&text=Ol%C3%A1%2Cestou%20interessado%20em%20locar%20a%20ch%C3%A1cara%20!')}>
          <Icon name='facebook'
            size={50}
            color='#3b5998'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSocial} onPress={() => Linking.openURL('https://www.facebook.com/chacara7anoes')}>
          <Icon name='facebook'
            size={50}
            color='#3b5998'
          />
        </TouchableOpacity>
      </View>


      <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => contact()}>
          <Icon
            name='phone'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => photo()}>
          <Icon
            name='photo'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => reserve()}>
          <Icon
            name='event-available'
            size={40}
            color='#4fc4af' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => reserve()}>
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
