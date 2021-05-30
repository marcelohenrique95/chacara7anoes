

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Header({ navigation }) {


    const back = () => {
        navigation.navigate('Home')
    }


    return (
        <SafeAreaView style={styles.header}>
            <View >
                <TouchableOpacity
                    onPress={() => back()}>
                    <Icon name='chevron-left'
                        size={50}
                        color='#fff'
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e85858',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    }
});