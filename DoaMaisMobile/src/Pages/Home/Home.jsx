import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Text, 
    View,
    StyleSheet, 
    Image,
    TouchableOpacity,
} from 'react-native';

export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
        <h1 style={styles.h1}>DOA+</h1>
                <Image style={styles.imagem}
                    source={require('../../../assets/logo.png')}
                    resizeMode="container"
                />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>A vida de milhares de pacientes depende do nosso trabalho e de apoio. Por isso, o DOA+ mobiliza parceiros para garantir a universalidade, equidade e integralidade no atendimento para todos.</Text>
            <br></br>
            <Text style={styles.title}>Seja um parceiro, um doador, um voluntário e vamos juntos ajudar na situação do país e de seus cidadãos.</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Listagem')}>
              <Text style={styles.button}>Continuar</Text> 
            </TouchableOpacity>    
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 20,
        marginBottom: 100,
    },
    h1 :{
        textAlign: 'center'
    },
    title:{
        textAlign: 'center',
        color: '#00BD79',
        fontWeight: 'semibold',
        fontSize: '15px',
    },
    button:{
        display: 'inline-block',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#16CF8C',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '18px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: 60,
    },
    imagem: {
        width: 200, // Defina o tamanho da imagem conforme necessário
        height: 200, // Defina o tamanho da imagem conforme necessário
        borderRadius: 40, // Arredonde a borda da imagem
    },
})