import axios from "../custom-axios/axios";

class AuthService {
    login(username, password) {
        return axios.post("/auth/signin", {
            username,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, name, surname, password, role, address) {
        return axios.post("/auth/signup", {
            username,
            name,
            surname,
            password,
            role,
            address
        })
    }

    getCurrentUser () {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();