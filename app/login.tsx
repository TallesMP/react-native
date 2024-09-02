import { Text, View, StyleSheet, Image, TextInput, Platform, StatusBar, Button } from "react-native";
import styles from './styles'
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
