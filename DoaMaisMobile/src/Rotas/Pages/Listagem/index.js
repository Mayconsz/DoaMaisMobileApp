import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Listagem() {
  return (
    <View style={styles.container}>
      <Text>Tela Listagem</Text>
      <StatusBar style="auto" />
    </View>
  );
}
