import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './styles'

export default class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <View style={styles.container}>
                <View style={styles.calendar}>
                    <CalendarPicker
                        onDateChange={this.onDateChange}
                    />

                    <View>
                        <Text>SELECTED DATE:{startDate}</Text>
                    </View>
                </View>

                <Text style={styles.text}>Nome</Text>
                <TextInput placeholder='Digite seu nome..' style={styles.inputText} />
                <Text style={styles.text}>Telefone</Text>
                <TextInput placeholder='Telefone para contato com DDD' style={styles.inputText} />
                <Text style={styles.text}>NºPessoas</Text>
                <TextInput keyboardType='numeric' placeholder='Qtd' style={styles.inputTextNumber} />
                <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>
                        RESERVAR
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}