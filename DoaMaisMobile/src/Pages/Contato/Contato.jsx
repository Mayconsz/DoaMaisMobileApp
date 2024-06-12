import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Linking, Image, TouchableOpacity, Platform } from 'react-native';
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
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar" />
        <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
        <TouchableOpacity onPress={() => navigation.navigate('Listagem')}>
          <MaterialIcons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{ uri: doacao?.imagensPedido[0]?.link ?? "" }} />
      <Text style={styles.title}>{doacao.titulo}</Text>
      <Text style={styles.subtitle}>{doacao.ong.nome}</Text>
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
        {doacao.ong.logradouro} {doacao.ong.numero} {doacao.ong.complemento} {doacao.ong.bairro} {doacao.ong.cidade} {doacao.ong.estado} {doacao.ong.cep}
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 40,
  },
  close: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: '#424242',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 120,
    marginTop: 10,
    fontFamily: 'sans-serif',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
    marginRight: 235,
    marginTop: 10,
    fontFamily: 'sans-serif',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#000',
    margin: '20 0',
    opacity: 0.2,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  contactTitle: {
    fontSize: 18,
    color: '#16CF8C',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 60,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 60,
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
});
