import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Contato() {
  const route = useRoute();
  const navigation = useNavigation();
  const doacao = route.params.doacao;

  function ChamarNoZap() {
    const phoneNumber = '+55' + doacao.ong.celular; // Substitua pelo número desejado
    const message = 'Olá! Desejo fazer uma doação!'; // Texto da mensagem

    if (Platform.OS === 'android') {
      Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
    } else if (Platform.OS === 'ios') {
      Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
    } else {
      Linking.openURL(`https://wa.me/${phoneNumber}?text=${message}`);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Listagem')}>
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: doacao?.imagensPedido[0]?.link ?? "" }} />
      <Text style={styles.title}>{doacao.titulo}</Text>
      <View style={styles.ongContainer}>
      <Image style={styles.fotoPerfil}
        source={{ uri: doacao?.ong.fotoPerfil }}
        resizeMode="container"
      />
        <Text style={styles.subtitle}>{doacao.ong.nome}</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.description}>{doacao.descricao}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.contactTitle}>FALE CONOSCO:</Text>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={ChamarNoZap}
      >
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Text style={styles.chatButtonText}>WhatsApp</Text>
      </TouchableOpacity>
      <Text style={styles.address}>
        {`${doacao.ong.logradouro} ${doacao.ong.numero} ${doacao.ong.complemento} ${doacao.ong.bairro} ${doacao.ong.cidade} ${doacao.ong.estado} ${doacao.ong.cep}`}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 380,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  title: {
    color: '#424242',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'sans-serif',
  },
  ongContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    
  },
  ongImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    fontFamily: 'sans-serif',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    opacity: 0.2,
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 30,
    marginTop: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  contactTitle: {
    fontSize: 18,
    color: '#16CF8C',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 80,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 80,
  },
  chatButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  address: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontWeight: 'semibold',
  },
  fotoPerfil: {
    position: 'absolute',
    bottom: -50,
    right: 230,
    width: 70,
    height: 70,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 50,
  },
});
