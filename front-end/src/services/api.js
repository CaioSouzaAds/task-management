import axios from "axios";

// Cria uma instância do Axios com baseURL pré-configurada
const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Adiciona um interceptor de resposta para verificar erros de conexão
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na conexão:", error.message);
    return Promise.reject(error);
  }
);

export default api;
