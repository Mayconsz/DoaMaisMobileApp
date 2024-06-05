import axios from "axios";
import AuthService from "./AuthService";

function createHeader() {
    const jwt = AuthService.PegarToken();
    if (jwt) {
        return {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        }
    }
}

const baseUrl = "https://localhost:7284/api";

const ApiService = {
    async get(endpoint) {
        const headers = createHeader();

        try {
            const response = await axios.get(baseUrl + endpoint, headers);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao realizar a requisição GET para ${endpoint}: ${error.message}`);
        }
    },

    async post(endpoint, body) {
        const header = createHeader();
        try {
            const response = await axios.post(baseUrl + endpoint, body, header);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao realizar a requisição POST para ${endpoint}: ${error.message}`);
        }
    }
};

export default ApiService;