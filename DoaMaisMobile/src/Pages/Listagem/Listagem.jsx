import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ApiService from './ApiService'; // Ajuste o caminho conforme necessário

export default function Listagem() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await ApiService.get('/PedidosDoacao'); // Substitua '/image-endpoint' pelo endpoint correto
        setImageUrl(response.imageUrl);
      } catch (error) {
        console.error('Erro ao buscar a imagem:', error.message);
      }
    };

    fetchImage();
  }, []);

  return (
    <View style={styles.containerForm}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Anuncios Publicados</Text>
      </View>

      {imageUrl ? (
        <View style={styles.containerImage}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: 200 }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <Text>Carregando imagem...</Text>
      )}

      <View>
        <Text style={styles.lista}>Conserto de encanamento</Text>
      </View>

      <View>
        <Text style={styles.lista2}>Publicado em 01/06/24</Text>
      </View>

      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/cesta_basica.png')}
          style={{ width: '100%', height: 200 }}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.lista}>Doação de alimento</Text>
      </View>

      <View>
        <Text style={styles.lista2}>Publicado em 01/05/24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    backgroundColor: '#38a69d',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
  },
  lista: {
    backgroundColor: '#38a69d',
    padding: 10,
    marginTop: 10,
    color: '#FFF',
    textAlign: 'center',
  },
  lista2: {
    backgroundColor: '#38a69d',
    padding: 10,
    marginTop: 5,
    color: '#FFF',
    textAlign: 'center',
  },
  containerImage: {
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: 20,
  },
});
