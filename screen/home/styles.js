import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    image: {
      width:200,
      height: 60,
      marginTop: 5,
      margin: 10
    },

    card: {
      width: '90%',
      padding:2,
      borderRadius: 17,
      backgroundColor: '#e85858'
    },
  
    textCard: {
      color:'#fff',
      textAlign: 'center',
      fontSize:15
    },
    image2: {
      width: 400,
      height: 400,
      
    },
    inputText: {
      width: '100%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      marginBottom: 15
    },
    inputPhone: {
      width: '100%',
      height: 40,
      backgroundColor: 'white',
      color: 'blue'
    },
    inputTextNumber: {
      width: '30%',
      height: 50,
      backgroundColor: 'white',
      borderRadius: 20,
      marginBottom: 15,
      marginRight: '70%'
    },
    buttonReserve: {
      backgroundColor: '#f5f116',
      width: '60%',
      height: 55,
      borderRadius: 10,
      marginBottom: 20,
      justifyContent: 'center'
    },
    buttonFacebook: {
      backgroundColor: '#3b5998',
      width: 'auto',
      height: 'auto',
      borderRadius: 10,
      marginTop: 'auto',
      marginRight: 'auto',
      justifyContent: 'center'
    },
    text: {
      backgroundColor: '#000000',
      fontSize: 15,
      color: 'white',
      width: 80,
      height: 15,
      marginBottom: 10,
      marginRight: '70%'
    },
    textAddres: {
      backgroundColor: '#000000',
      color: '#4fc4af',
      width: 'auto',
      height: 'auto',
      marginLeft: 'auto'
    },
    viewSocial: {
      alignItems:'flex-start',
      padding:10,
      justifyContent: 'flex-start'
    },
    buttonSocial: {
      backgroundColor: '#f0fffc',
      height:50,
    },
    viewFooter: {
      backgroundColor: '#e85858',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      alignItems:'center',
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'row'
    },
    buttonFooter: {
      backgroundColor: '#e85858',
      height:40,
      borderRadius: 40,
      margin: 20
    },
    header: {
      backgroundColor: '#e85858',
      justifyContent: 'space-around',
      borderRadius: 5,
      marginBottom: 100

    }
  });
  