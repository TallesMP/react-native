import {Text, View, StyleSheet, Image, TextInput, Platform, StatusBar, Button, } from "react-native";
import styles from './styles'
export default function Index() {
  return (
  <View style={styles.principal}>
    <Text style={{color:'white'}}>Insira o endereço de email{'\n'}para recuperar a sua senha</Text>
    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="aaa"/>
    <Button
      title="Enviar"
      color='#FFa500' />
    
    
  </View>
  );
}


