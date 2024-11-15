

import React, { useState } from 'react';
import { Text, View, Image, StatusBar, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoSecundario from '../../components/BotaoSecundario';
import { supabase } from '../ClienteSupabase';
import styles from '../styles';

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    // Autenticação no Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }

    console.log('Usuário autenticado:', data);
    router.push("/home");
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
          source={require('../../assets/images/profile-icon.png')}
          style={styles.imagem}
        />
      </View>

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>} {/* Exibe erros */}

      <View style={styles.botoes}>
        <BotaoPrimario title={loading ? "Carregando..." : "Entrar"} onPress={handleLogin} />
      </View>


      <View style={styles.botoes}>
        <BotaoSecundario title="Esqueci a senha" onPress={handleForgotPassword} />
      </View>

      <View style={styles.botoes}>
        <BotaoSecundario title="Criar conta" onPress={handleCreateAccount} />
      </View>

    </View>
  );
}

