
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#343b45',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  perfil: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  login: {
    width: '100%',
  },
  input: {
    height: 45,
    marginVertical: 10,
    backgroundColor: '#3e4750',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFa500',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonSecondary: {
    backgroundColor: '#575f66',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#ccc',
    fontSize: 16,
  },
  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  criarConta: {
    marginTop: 20,
  },
});

export default styles;

