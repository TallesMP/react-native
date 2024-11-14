
import { Text, View, TextInput, StatusBar } from "react-native";
import { useRouter } from 'expo-router';
import BotaoPrimario from '../../components/BotaoPrimario';
import styles from '../styles';

export default function Index() {
  const router = useRouter();

  const handleCreateAccount = () => {
    console.log("Criar conta");
    router.push('/login');
  };

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

      <BotaoPrimario title="Criar conta" onPress={handleCreateAccount} />
    </View>
  );
}

