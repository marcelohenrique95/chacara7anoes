import { View, Image,Text } from 'react-native';
import styles from './styles'
import React, {Component} from 'react';
import { Header } from '../../components/Header/Header';

export default function ViewPhotos({ navigation }) {


    return (
        <View style={styles.container}>
        

            <Image style={styles.image} source={require('./../../assets/chac-img2.jpeg')} />
            <Image style={styles.image} source={require('./../../assets/chac-img3.jpeg')} />
            <Image style={styles.image} source={require('./../../assets/chac-quarto.jpg')} />
            <Image style={styles.image} source={require('./../../assets/chac-quarto2.jpg')} />







        </View>



    );

}