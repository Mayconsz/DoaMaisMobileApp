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
  const [doacoes, setDoacoes] = useState([]);
  const [doacoesExibidas, setDoacoesExibidas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    buscarDoacoes();
  }, []);

  async function buscarDoacoes() {
    try {
      const response = await ApiService.get('/PedidosDoacao');
      console.log('Response from API:', response);
      setDoacoes(response);
      setDoacoesExibidas(response);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  }

  async function filtrarPorTipo(ID_Tipo) {
    try {
      const response = await ApiService.get(`/PedidosDoacao/porTipo/${ID_Tipo}`);
      setDoacoesExibidas(response);
      setFiltroAtivo(ID_Tipo);
    } catch (error) {
      console.error('Erro ao filtrar por tipo:', error);
    }
  }

  async function limparFiltro() {
    try {
      await buscarDoacoes();
      setFiltroAtivo(null);
    } catch (error) {
      console.error('Erro ao limpar filtro:', error);
    }
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
          style={[styles.button, filtroAtivo == 1 && styles.buttonActive]}
          onPress={() => filtrarPorTipo(1)}
        >
          <Text style={styles.buttonText}>Alimento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo == 2 && styles.buttonActive]}
          onPress={() => filtrarPorTipo(2)}
        >
          <Text style={styles.buttonText}>Vestuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo == 3 && styles.buttonActive]}
          onPress={() => filtrarPorTipo(3)}
        >
          <Text style={styles.buttonText}>Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo == 4 && styles.buttonActive]}
          onPress={() => filtrarPorTipo(4)}
        >
          <Text style={styles.buttonText}>Movéis</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filtroAtivo == 5 && styles.buttonActive]}
          onPress={() => filtrarPorTipo(5)}
        >
          <Text style={styles.buttonText}>Outros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'transparent' }]}
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
  },
  button: {
    flex: 1,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: 'transparent', 
    alignItems: 'center',
    justifyContent: 'center',
  },  
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonActive: {
    backgroundColor: '#692cab6b',
  },
});
