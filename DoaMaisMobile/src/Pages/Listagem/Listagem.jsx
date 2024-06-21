import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ApiService from '../../Services/ApiService';
import CardDoacao from '../../Components/CardDoacao';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Listagem() {
  useEffect(() => {
    buscarDoacoes();
  }, []);

  const [doacoes, setDoacoes] = useState([]);
  const [doacoesExibidas, setDoacoesExibidas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  async function buscarDoacoes() {
    const response = await ApiService.get('/PedidosDoacao');
    setDoacoes(response);
    setDoacoesExibidas(response);
    console.log(response);
  }

  function filtrarDoacoes(text) {
    setSearchText(text);
    if (text) {
      const filteredDoacoes = doacoes.filter(doacao =>
        doacao.titulo.toLowerCase().includes(text.toLowerCase()) ||
        doacao.ong.nome.toLowerCase().includes(text.toLowerCase())
      );
      setDoacoesExibidas(filteredDoacoes);
    } else {
      setDoacoesExibidas(doacoes);
    }
  }

  async function handleOrderClick() {
    let newList = [...doacoes];
    newList.sort((a, b) => (a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0));
    setDoacoesExibidas(newList);
  }

  return (
    <View style={styles.container}>
       <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquise uma ong"
        value={searchText}
        onChangeText={text => filtrarDoacoes(text)}
      />
      <TouchableOpacity style={styles.orderButton} onPress={handleOrderClick}>
        <MaterialCommunityIcons
          name="order-alphabetical-ascending"
          size={32}
          color="#888"
        />
      </TouchableOpacity>
      </View>
      <Text style={styles.textTitle}>Anúncios publicados</Text>
      <ScrollView>
        {doacoesExibidas.map((doacao, index) => (
          <CardDoacao key={index} doacao={doacao}></CardDoacao>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textTitle: {
    textAlign: 'center',
    color: '#16CF8C',
    fontWeight: '600',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#38a69d',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#363636',
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
  },


  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#38a69d',
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,

  },
  orderButton: {
    padding: 10,
    borderRadius: 5,
  },
});