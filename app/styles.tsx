
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
    maxWidth: 400,  // Definir largura máxima para os inputs
  },
  input: {
    height: 45,
    marginVertical: 10,
    backgroundColor: '#3e4750',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    width: '100%',  // Garantir que o input ocupe toda a largura disponível
    maxWidth: 400,  // Limitar a largura máxima
  },
  botoes: {
    width: '100%',
    maxWidth: 400,  // Definir largura máxima para os botões
    marginTop: 15,
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

  // HOME: 

  principal2: {
    backgroundColor: '#343b45',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  listaGrupos: {
    width: '100%',  // Garantir que a lista ocupe toda a largura disponível
    paddingBottom: 20,
  },
  grupoItem: {
    backgroundColor: '#3e4750',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  grupoItemDestaque: {
    borderColor: '#FFa500',
    borderWidth: 2,
    backgroundColor: '#4a565f',
  },
  grupoNome: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  grupoDescricao: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 5,
  },
  grupoTema: {
    color: '#aaa',
    fontSize: 14,
  },
  integrantesTitulo: {
    color: '#FFa500',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  integrantes: {
    color: '#ccc',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FFa500',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

