import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/MaterialIcons'

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
        const data = [
            { key: 1, label: 'Aniversário' },
            { key: 2, label: 'Casamento' },
            { key: 3, label: 'Churrasco' },
            { key: 4, label: 'Chá de bebê' },
            { key: 5, label: 'Retiro' },
        ]

        return (
            <View style={styles.container}>
                <Header>

                </Header>
                <View style={styles.container}>
                    <Icon
                        name='calendar-today'
                        size={120}
                        color='#e85858'

                    />
                    <Text style={styles.textbig}>Preencha todos os dados para finalizar o orçamento.</Text>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput placeholder='Digite seu nome..' style={styles.inputText} />
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput placeholder='Digite seu email @' style={styles.inputText} />
                    <Text style={styles.text}>NºPessoas</Text>
                    <TextInput keyboardType='numeric' placeholder='Qtd' style={styles.inputTextNumber} />
                    <ModalSelector
                        style={styles.modal}
                        data={data}
                        initValue="Selecione o tipo de evento"
                        supportedOrientations={['landscape']}


                    >

                    </ModalSelector>
                    <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>
                            RESERVAR
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.textFinish}>O Orçamento foi enviado para o seu e-mail!</Text>
                </View>
            </View>
        );
    }
}