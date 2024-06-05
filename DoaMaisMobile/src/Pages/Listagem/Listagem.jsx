import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Listagem() {
  return (
    <View style={styles.containerForm}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Anuncios Publicados</Text>  
      </View> 

      <View>
        <View style={styles.containerImage}>
          <image
           source={require('../../../assets/vazamento-condominio')}
           style={{width:'100%'}}
           resizeMode="container"
         />
        </View>

        <View>
          <Text style={styles.lista}>Conserto de encanamento</Text>
        </View>

        
        <View>
          <Text style={styles.lista2}>Publicado em 01/06/24</Text>
        </View>

      </View>

      <View>
        <View style={styles.containerImage}>
          <image
           source={require('../../../assets/cesta_basica')}
           style={{width:'100%'}}
           resizeMode="container"
         />
        </View>

        <View>
          <Text style={styles.lista}>Doação de alimento</Text>
        </View>

        
        <View>
          <Text style={styles.lista2}>Publicado em 01/05/24</Text>
        </View>

      </View>

      
    </View>
  );
}
