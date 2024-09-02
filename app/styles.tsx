import {StyleSheet} from 'react-native'

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
    borderRadius: 60,
  },
  login: {
    width: '80%',
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
    width: '80%',
  },
  criarConta: {
    marginTop: 15,
  },
  texto: {
    color: 'white'
  }

});

export default styles;
