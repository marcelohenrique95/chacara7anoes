

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}> 
        {/* icon for the menu */}
            <Text style={styles.headerText}>Festas & Eventos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        height:'5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4fc4af'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    }
});