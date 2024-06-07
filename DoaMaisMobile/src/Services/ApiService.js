import axios from "axios";

const baseUrl = "https://localhost:7284/api";

const ApiService = {
    async get(endpoint) {
        try {
            const response = await axios.get(baseUrl + endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao realizar a requisição GET para ${endpoint}: ${error.message}`);
        }
    },

    async post(endpoint, body) {
        try {
            const response = await axios.post(baseUrl + endpoint, body);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao realizar a requisição POST para ${endpoint}: ${error.message}`);
        }
    }
};

export default ApiService;