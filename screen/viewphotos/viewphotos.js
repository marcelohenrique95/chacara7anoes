import React from 'react';
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import styles from './styles'
import Header from '../../components/Header/Header';

export default function ViewPhotos({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header>

            </Header>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    área externa
            </Text>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('./../../assets/chac-img.jpeg')} />
                    <Image style={styles.image} source={require('./../../assets/chac-img2.jpeg')} />
                    <Image style={styles.image} source={require('./../../assets/chac-img3.jpeg')} />
                </View>
                <Text style={styles.text}>
                    área interna
            </Text>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('./../../assets/chac-quarto.jpg')} />
                    <Image style={styles.image} source={require('./../../assets/chac-quarto2.jpg')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
