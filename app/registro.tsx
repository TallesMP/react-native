import {Text, View, StyleSheet, Image, TextInput, Platform, StatusBar, Button, } from "react-native";

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

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#343b45',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  login: {
    width: '80%'
  },
  input: {
    height: 40,
    marginVertical: 10,
    backgroundColor: '#3e4750',
    color: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 5
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
});
