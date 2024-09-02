import {Text, View, StyleSheet, Image, TextInput, Platform, StatusBar, Button, } from "react-native";
import styles from './styles'
export default function Index() {
  return (
  <View style={styles.principal}>
    <StatusBar hidden/>
      
    <View style={styles.login}>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa"/>
      <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor="#aaa"/>
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa"/>
      <TextInput style={styles.input} placeholder="Repetir Senha" placeholderTextColor="#aaa"/>

    </View>
      
    <View style={styles.botoes}>
      <Button
        title="Criar conta"
        color="#FFa500"
      />
    </View>
  </View>
  );
}


