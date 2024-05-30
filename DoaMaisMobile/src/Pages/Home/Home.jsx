import React from 'react';

import { 
    Text, 
    View,
    StyleSheet, 
    Image,
    TouchableOpacity,
} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{width:'100%'}}
                    resizeMode="container"
                />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>100% de esforço onde houver 1% de chance</Text>
            <Text style={styles.title}>A vida de milhares de pacientes depende do nosso trabalho e de apoio. Por isso, a Abrale mobiliza parceiros para garantir a universalidade, equidade e integralidade no atendimento para todos.</Text>

            <TouchableOpacity>
              <Text style={styles.button}>Continuar</Text> 
            </TouchableOpacity>    
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    }
})