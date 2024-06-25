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
  const [filtroAtivo, setFiltroAtivo] = useState(null); // Estado para controlar o filtro ativo
  const navigation = useNavigation();

  async function buscarDoacoes() {
    const response = await ApiService.get('/PedidosDoacao');
    setDoacoes(response);
    setDoacoesExibidas(response);
  }

  function filtrarPorTipo(tipo) {
    // Atualizar o estado do filtro ativo
    setFiltroAtivo(tipo);

    // Filtrar doações pelo tipo selecionado
    const filteredDoacoes = doacoes.filter(doacao => doacao.tipo === tipo);
    setDoacoesExibidas(filteredDoacoes);
  }

  function limparFiltro() {
    // Limpar o filtro e mostrar todas as doações
    setFiltroAtivo(null);
    setDoacoesExibidas(doacoes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquise uma ong"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, filtroAtivo === 'Alimentos' && styles.buttonActive]}
          onPress={() => filtrarPorTipo('alimentos')}
        >
          <Text style={styles.buttonText}>Alimentos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo === 'Vestuario' && styles.buttonActive]}
          onPress={() => filtrarPorTipo('vestuario')}
        >
          <Text style={styles.buttonText}>Vestuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo === 'Serviço' && styles.buttonActive]}
          onPress={() => filtrarPorTipo('Serviço')}
        >
          <Text style={styles.buttonText}>Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo === 'Movéis' && styles.buttonActive]}
          onPress={() => filtrarPorTipo('Movéis')}
        >
          <Text style={styles.buttonText}>Movéis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo === 'outros' && styles.buttonActive]}
          onPress={() => filtrarPorTipo('outros')}
        >
          <Text style={styles.buttonText}>Outros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E74C3C' }]}
          onPress={limparFiltro}
        >
          <Text style={styles.buttonText}>Limpar Filtro</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {doacoesExibidas.map((doacao, index) => (
          <CardDoacao key={index} doacao={doacao} />
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
  searchContainer: {
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#38a69d',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 530,
    backgroundColor: '#38a69d',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonActive: {
    backgroundColor: '#16CF8C', // Cor diferente para o botão ativo
  },
});
