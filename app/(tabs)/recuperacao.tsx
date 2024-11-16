
import React, { useState } from "react";
import { Text, View, TextInput, StatusBar, Alert } from "react-native";
import { useRouter } from 'expo-router';
import { supabase } from '../ClienteSupabase';
import BotaoPrimario from '../../components/BotaoPrimario';
import styles from '../styles';

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRecovery = async () => {
    setLoading(true);
    setError(null);

    if (!email) {
      setLoading(false);
      setError('Por favor, insira seu email.');
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        throw error;
      }

      Alert.alert('Sucesso!', 'Um email de recuperação foi enviado para o seu endereço de email.', [
        { text: 'OK', onPress: () => router.push('/login') }
      ]);

    } catch (error: any) {
      console.error('Erro ao enviar email de recuperação:', error.message);
      setError(error.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
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
        value={email}
        onChangeText={setEmail}
      />

      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>} {}

      <BotaoPrimario
        title={loading ? "Enviando..." : "Enviar"}
        onPress={handleRecovery}
      />
    </View>
  );
}

