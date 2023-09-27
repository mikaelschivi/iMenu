import axios from 'axios';

const api = axios.create({
  //local onde esta rodando a aplicacao
  baseURL: 'http://localhost:3000' 
});


export default api