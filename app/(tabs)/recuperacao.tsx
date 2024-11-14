
import { Text, View, TextInput, StatusBar } from "react-native";
import { useRouter } from 'expo-router';
import BotaoPrimario from '../../components/BotaoPrimario';
import styles from '../styles';

export default function Index() {
  const router = useRouter();

  const handleRecovery = () => {
    console.log("Enviar email de recuperação");
    router.push('/login');
  };

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

      <BotaoPrimario title="Enviar" onPress={handleRecovery} />
    </View>
  );
}

