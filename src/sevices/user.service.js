import axios from "../custom-axios/axios";
import authHeader from "./auth-header";

class UserService {
    getUserBoard() {
        return axios.get('/user', { headers: authHeader() });
    }
    getModeratorBoard() {
        return axios.get('/mod', { headers: authHeader() });
    }
    getAdminBoard() {
        return axios.get('/admin', { headers: authHeader() });
    }
}
export default new UserService();