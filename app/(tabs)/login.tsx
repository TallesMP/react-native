
import { Text, View, Image, TextInput, StatusBar, TouchableOpacity } from "react-native";
import styles from '../styles';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.principal}>
      <StatusBar barStyle="light-content" />

      <View style={styles.perfil}>
        <Image
          source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficones.pro%2Fwp-content%2Fuploads%2F2021%2F02%2Ficone-utilisateur-orange.png&f=1&nofb=1&ipt=4f4a154e78b0f2163abea272a3417191a20c2bf26a9a5a9162f64ff4f110a3ea&ipo=images' }}
          style={styles.imagem}
        />
      </View>

      <View style={styles.login}>
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
      </View>

      <View style={styles.botoes}>
        <Link href="/recuperacao">
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => console.log("Esqueci a senha")}>
            <Text style={styles.buttonTextSecondary}>Esqueci a senha</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Entrar")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.criarConta}>
        <Link href="/registro">
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => console.log("Criar conta")}>
            <Text style={styles.buttonTextSecondary}>Criar conta</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

