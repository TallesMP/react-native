import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import { supabase } from '../ClienteSupabase';

const fetchGrupos = async () => {
  try {
    const { data, error } = await supabase.from('Grupos').select('*');
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao buscar grupos:', error);
    return [];
  }
};

const fetchIntegrantes = async (idGrupo: string) => {
  try {
    const { data, error } = await supabase
      .from('Usuarios')
      .select('nome')
      .eq('id_grupo', idGrupo);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao buscar integrantes:', error);
    return [];
  }
};

// Função para calcular a média das notas
const fetchMediaNotas = async (idGrupo: string) => {
  try {
    const { data, error } = await supabase
      .from('Avaliacoes')
      .select('nota')
      .eq('id_grupo', idGrupo);
    if (error) throw error;

    // Calcular a média das notas
    const totalNotas = data.reduce((acc, curr) => acc + curr.nota, 0);
    const mediaNotas = totalNotas / data.length;

    return mediaNotas || 0;
  } catch (error) {
    console.error('Erro ao calcular a média das notas:', error);
    return 0;
  }
};

export default function Home() {
  const router = useRouter();
  const [grupos, setGrupos] = useState<any[]>([]);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);
  const [integrantes, setIntegrantes] = useState<any[]>([]);
  const [mediaNotas, setMediaNotas] = useState<number | null>(null);

  const checkUserAuth = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !session) {
      router.push('/login');
    }
  };


  const loadGrupos = async () => {
    const gruposData = await fetchGrupos();
    setGrupos(gruposData);
  };

  const loadIntegrantes = async (idGrupo: string) => {
    const integrantesData = await fetchIntegrantes(idGrupo);
    setIntegrantes(integrantesData);
  };

  // Função para c
  const loadMediaNotas = async (idGrupo: string) => {
    const media = await fetchMediaNotas(idGrupo);
    setMediaNotas(media);
  };

  useEffect(() => {
    checkUserAuth();

    loadGrupos();

    const interval = setInterval(() => {
      loadGrupos();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleGroupExpansion = async (groupId: string) => {
    if (expandedGroupId === groupId) {
      setExpandedGroupId(null);
      setIntegrantes([]);
      setMediaNotas(null);
    } else {
      setExpandedGroupId(groupId);

      setIntegrantes([]);
      setMediaNotas(null);

      await loadIntegrantes(groupId);
      await loadMediaNotas(groupId);
    }
  };

  const renderGroupItem = ({ item }: any) => {
    const isExpanded = item.id === expandedGroupId;

    return (
      <TouchableOpacity onPress={() => toggleGroupExpansion(item.id)}>
        <View style={[styles.grupoItem, isExpanded && styles.grupoItemDestaque]}>
          <Text style={styles.grupoNome}>{item.nome}</Text>
          {isExpanded && (
            <>
              <Text style={styles.grupoDescricao}>{item.descricao}</Text>
              <Text style={styles.grupoTema}>{item.tema}</Text>
              <Text style={styles.criado}>Criado em: {new Date(item.criado).toLocaleDateString()}</Text>

              {/* Mostrar os integrantes do grupo */}
              {integrantes.length > 0 && (
                <View style={styles.integrantesContainer}>
                  <Text style={styles.integrantesTitle}>Integrantes:</Text>
                  <FlatList
                    data={integrantes}
                    renderItem={({ item }) => (
                      <Text style={styles.integranteNome}>{item.nome}</Text>
                    )}
                    keyExtractor={(item) => item.nome}
                  />
                </View>
              )}

              {mediaNotas !== null && (
                <View style={styles.integrantesContainer}>
                  <Text style={styles.notaTitle}>Nota</Text> {/* Título "Nota" com estilo personalizado */}
                  <Text style={styles.notaValor}>{mediaNotas.toFixed(2)}</Text> {/* Exibe a média com 2 casas decimais */}
                </View>
              )}
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erro ao deslogar:', error.message);
    } else {
      router.push('/login');
    }
  };

  return (
    <View style={styles.principal2}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.titulo}>Grupos</Text>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutIcon}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <FlatList
        data={grupos}
        renderItem={renderGroupItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaGrupos}
        showsVerticalScrollIndicator={false}
        indicatorStyle="black"
      />
    </View>
  );
}
