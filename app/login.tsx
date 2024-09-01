import { Text, View, StyleSheet, Image, TextInput, Platform, StatusBar, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.principal}>
      <StatusBar hidden/>

      <View style={styles.perfil}>
        <Image 
          source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficones.pro%2Fwp-content%2Fuploads%2F2021%2F02%2Ficone-utilisateur-orange.png&f=1&nofb=1&ipt=4f4a154e78b0f2163abea272a3417191a20c2bf26a9a5a9162f64ff4f110a3ea&ipo=images'}}
          style={styles.imagem}
        />
      </View>

      <View style={styles.login}>
        <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#aaa"/>
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa"/>
      </View>

      <View style={styles.botoes}>
        <Button
          title="Esqueci a senha"
          color='#343b45'/>
        <Button
          title="Entrar"
          color="#FFa500"
          />
      </View>
      <View style={styles.criarConta}>
        <Button
          title="Criar conta"
          color="#343b45"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#343b45',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfil: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 140,
    height: 150,
    borderRadius: 60, // Mais proporcional
  },
  login: {
    width: '80%', // Define a largura do container de login
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
    justifyContent: 'space-between',
    width:28
  },
  criarConta: {
    marginTop: 15,
  }

});
