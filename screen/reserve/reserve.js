import { Text, View, Image, TextInput } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { Header } from 'react-native/Libraries/NewAppScreen';
import styles from './styles'


export default function Reserve({ navigation }) {


    return (
        <View style={styles.container}>
            <Header
                title={('Reserva')}
                renderLeft={() => { return (<Icon name='arrow-left' size={20} />); }}
                onPressLeft={() => { navigation.navigate('Home'); }}
            />
            <TouchableOpacity style={styles.buttonReserve} onPress={() => register()}>
                <Text style={{ color: 'black', textAlign: 'center' }}>
                    RESERVAR
            </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Nome</Text>
            <TextInput placeholder='Digite seu nome valdinet..' style={styles.inputText} />
            <Text style={styles.text}>Telefone</Text>
            <TextInput placeholder='Telefone para contato com DDD' style={styles.inputText} />
            <Text style={styles.text}>NºPessoas</Text>
            <TextInput keyboardType='numeric' placeholder='Qtd' style={styles.inputTextNumber} />









        </View>



    );

}