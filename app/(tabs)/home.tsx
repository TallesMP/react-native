
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
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

export default function Home() {
  const [grupos, setGrupos] = useState<any[]>([]);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);
  const [integrantes, setIntegrantes] = useState<any[]>([]);

  const loadGrupos = async () => {
    const gruposData = await fetchGrupos();
    setGrupos(gruposData);
  };


  const loadIntegrantes = async (idGrupo: string) => {
    const integrantesData = await fetchIntegrantes(idGrupo);
    setIntegrantes(integrantesData);
  };

  useEffect(() => {
    loadGrupos();

    const interval = setInterval(() => {
      loadGrupos();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleGroupExpansion = async (groupId: string) => {
    if (expandedGroupId === groupId) {
      setExpandedGroupId(null); // fecha se o grupo já estiver expandido
      setIntegrantes([]);
    } else {
      setExpandedGroupId(groupId);
      await loadIntegrantes(groupId);
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
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.principal2}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.titulo}>Grupos</Text>
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

