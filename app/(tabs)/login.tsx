
import { Text, View, Image, TextInput, StatusBar } from "react-native";
import { useRouter } from 'expo-router';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoSecundario from '../../components/BotaoSecundario';
import styles from '../styles';

export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Entrar");
  };

  const handleForgotPassword = () => {
    console.log("Esqueci a senha");
    router.push('/recuperacao');
  };

  const handleCreateAccount = () => {
    console.log("Criar conta");
    router.push('/registro');
  };

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
        <BotaoSecundario title="Esqueci a senha" onPress={handleForgotPassword} />
        <BotaoPrimario title="Entrar" onPress={handleLogin} />
      </View>

      <View style={styles.criarConta}>
        <BotaoSecundario title="Criar conta" onPress={handleCreateAccount} />
      </View>
    </View>
  );
}

