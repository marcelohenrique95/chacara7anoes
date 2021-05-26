import { View, Image } from 'react-native';
import styles from './styles'
import React, { Component } from 'react';



export default function ViewPhotos({navigation}) {


    return (
        <View style={styles.container}>

<Image style={styles.image} source={require('./../../assets/chac-img2.jpeg')} />
<Image style={styles.image} source={require('./../../assets/chac-img3.jpeg')} />
<Image style={styles.image} source={require('./../../assets/chac-quarto.jpg')} />







        </View>



    );

}