

import React, { useState } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../ClienteSupabase';
import BotaoPrimario from '../../components/BotaoPrimario';
import styles from '../styles';

export default function Index() {
  const router = useRouter();

  // Estados para capturar os valores do formulário
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateAccount = async () => {
    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password: senha,
      });

      if (authError) {
        setLoading(false);
        setError(authError.message);
        return;
      }

      console.log('Usuário criado:', data);
      router.push('/login');
    } catch (error) {
      setLoading(false);
      setError('Ocorreu um erro ao criar a conta');
    }
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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>

      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

      <BotaoPrimario title={loading ? 'Carregando...' : 'Criar conta'} onPress={handleCreateAccount} />
    </View>
  );
}

