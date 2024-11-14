
import { Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native";
import styles from '../styles';

export default function Index() {
  return (
    <View style={styles.principal}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.texto}>Crie sua conta</Text>

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Criar conta")}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

