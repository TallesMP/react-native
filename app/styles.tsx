
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
    maxWidth: 400,
  },
  input: {
    height: 45,
    marginVertical: 10,
    backgroundColor: '#3e4750',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
  },
  botoes: {
    width: '100%',
    maxWidth: 400,
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
    paddingHorizontal: 0,
  },

  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  listaGrupos: {
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 0,
  },

  grupoItem: {
    backgroundColor: '#3e4750',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    width: '100%',
    minWidth: 250
  },

  grupoItemDestaque: {
    borderColor: '#FFa500',
    borderWidth: 2,
    backgroundColor: '#4a565f',
  },

  grupoNome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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

  criado: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 5,
  },

  integrantesContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  integrantesTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  integranteNome: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 2,
    textAlign: 'center',
  },

  notaTitle: {
    color: '#FFa500',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  notaValor: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  logoutIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },

});

export default styles;
