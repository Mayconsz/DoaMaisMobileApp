import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text>Tela Contato</Text>
      <StatusBar style="auto" />
    </View>
  );
}