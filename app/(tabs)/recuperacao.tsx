

import { Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native";
import styles from '../styles';

export default function Index() {
  return (
    <View style={styles.principal}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.texto}>
        Insira o endereço de email para recuperar a sua senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Enviar email de recuperação")}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

