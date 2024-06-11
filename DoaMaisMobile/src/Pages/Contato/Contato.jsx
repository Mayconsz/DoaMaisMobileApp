import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Contato(doacao,index ) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar" />
        <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
      </View>
      <Image style={styles.image}
                    source={require('../../../assets/cesta_basica.png')}
                    resizeMode="container"
                />
      <Text style={styles.title}>Doação de Alimento</Text>
      <Text style={styles.subtitle}>Nome da Ong</Text>
      <Text style={styles.description}>
        A distribuição de alimentos satisfaz a necessidade básica, com uma alimentação mais saborosa e balanceada. Possibilita a melhoria na saúde e favorece o desenvolvimento psicomotor das pessoas assistidas, criando condições para sua inserção na sociedade e no setor produtivo.
      </Text>
      <Text style={styles.contactTitle}>FALE CONOSCO:</Text>
      <TouchableOpacity style={styles.chatButton}>
        <MaterialIcons name="chat" size={24} color="white" />
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
      <Text style={styles.address}>
        Rua Doutor Fernandes Coelho, 64 - 13º Andar - Pinheiros - São Paulo - SP - CEP: 05423-040
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
    right: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
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
  },
});