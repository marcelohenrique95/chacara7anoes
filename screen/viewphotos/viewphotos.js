import { View, Image, Text } from 'react-native';
import styles from './styles'
import React from 'react';

export default function ViewPhotos({ navigation }) {



    <View>
        <View style={styles.container}>
            <Image style={styles.image} source={require('./../../assets/chac-img2.jpeg')} />
            <Image style={styles.image} source={require('./../../assets/chac-img3.jpeg')} />
        </View>
        <View style={styles.container}>
            <Image style={styles.image} source={require('./../../assets/chac-quarto.jpg')} />
            <Image style={styles.image} source={require('./../../assets/chac-quarto2.jpg')} />
        </View>
    </View>




    );

}