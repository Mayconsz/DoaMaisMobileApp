import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity // Adicione esta linha de importação
} from 'react-native';
import ApiService from '../../Services/ApiService';
import CardDoacao from '../../Components/CardDoacao';
import { useNavigation } from '@react-navigation/native';


export default function Listagem() {
  useEffect(() => {
    BuscarDoacoes();
  }, []);

  const [doacoes, setDoacoes] = useState([]);
  const [doacoesExibidas, setDoacoesExibidas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  async function BuscarDoacoes() {
    const response = await ApiService.get('/PedidosDoacao'); // Substitua '/image-endpoint' pelo endpoint correto
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


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={text => filtrarDoacoes(text)}
      />
      <View>
        <Text style={styles.textTitle}> Anúncios publicados </Text>
      </View>

      <ScrollView>
        {doacoesExibidas?.map((doacao, index) => (
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
  searchBar: {
    height: 40,
    borderColor: '#38a69d',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#38a69d',
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
  }
});
