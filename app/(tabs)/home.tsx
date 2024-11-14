
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles';

const fetchGrupos = async () => {
  return [
    { id: '1', nome: 'Grupo Alpha', descricao: 'Grupo focado em IA', tema: 'Inteligência Artificial', integrantes: ['Alice', 'Bob', 'Carlos', 'Diana'], isCurrentUserGroup: false },
    { id: '2', nome: 'Grupo Beta', descricao: 'Grupo de Blockchain', tema: 'Blockchain', integrantes: ['Eve', 'Fay', 'George', 'Hannah'], isCurrentUserGroup: true },
    { id: '3', nome: 'Grupo Gamma', descricao: 'Grupo sobre Robótica', tema: 'Robótica', integrantes: ['Igor', 'Julia', 'Karla', 'Lucas'], isCurrentUserGroup: false },
    { id: '4', nome: 'Grupo Delta', descricao: 'Grupo de Inovação Social', tema: 'Inovação Social', integrantes: ['Maria', 'Nina', 'Oscar', 'Paul'], isCurrentUserGroup: false },
  ];
};

export default function Home() {
  const router = useRouter();
  const [grupos, setGrupos] = useState<any[]>([]);

  // Função para carregar os grupos da API (simulada)
  const loadGrupos = async () => {
    const gruposData = await fetchGrupos();
    setGrupos(gruposData);
  };

  useEffect(() => {
    loadGrupos();

    const interval = setInterval(() => {
      loadGrupos();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleEditGroup = (groupId: string) => {
    console.log("Editar grupo", groupId);
    //router.push(`/editarGrupo/${groupId}`);
  };

  const renderGroupItem = ({ item }: any) => (
    <View style={[styles.grupoItem, item.isCurrentUserGroup && styles.grupoItemDestaque]}>
      <Text style={styles.grupoNome}>{item.nome}</Text>
      <Text style={styles.grupoDescricao}>{item.descricao}</Text>
      <Text style={styles.grupoTema}>{item.tema}</Text>
      <Text style={styles.integrantesTitulo}>Integrantes:</Text>
      <Text style={styles.integrantes}>{item.integrantes.join(', ')}</Text>
      {item.isCurrentUserGroup && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEditGroup(item.id)}
        >
          <Text style={styles.buttonText}>Editar Grupo</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.principal2}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.titulo}>Grupos</Text>
      <FlatList
        data={grupos}
        renderItem={renderGroupItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaGrupos}
        showsVerticalScrollIndicator={false} // Ativa a barra de rolagem
        indicatorStyle="black" // Cor da barra de rolagem
      />
    </View>
  );
}

