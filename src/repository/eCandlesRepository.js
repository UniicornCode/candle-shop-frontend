import axios from "../custom-axios/axios";
import authHeader from "../sevices/auth-header";

const ECandleRepository = {
    fetchCandles: () => {
        return axios.get("/candles", { headers: authHeader() });
    },
    fetchMaterials: () => {
        return axios.get("/materials", { headers: authHeader() });
    },
    fetchRoles: () => {
        return axios.get("/roles", { headers: authHeader() });
    },
    fetchOrders: () => {
        return axios.get("/orders", { headers: authHeader() })
    },
    fetchShoppingCart: () => {
        return axios.get("/shopping-cart", { headers: authHeader() })
    },
    fetchSuggestions: () => {
        return axios.get("/suggestions", { headers: authHeader() });
    },
    createOrder: () => {
        return axios.post("/orders", {},{ headers: authHeader() })
    },
    addToShoppingCart: (candle) => {
        return axios.post("/shopping-cart/add", {
            "candle": candle
        }, { headers: authHeader() })
    },
    getCandle: (id) => {
        return axios.get(`/candles/${id}`,
            { headers: authHeader() })
    },
    addCandle: (price, name, imgUrl, materials) => {
        return axios.post("/candles/add", {
            "price": price,
            "name": name,
            "imgUrl": imgUrl,
            "materials": materials
        }, { headers: authHeader() })
    },
    deleteCandle: (id) => {
        return axios.delete(`/candles/delete/${id}`,
            { headers: authHeader() })
    },
    editCandle: (id, name, price, imgUrl, materials) => {
        return axios.put(`/candles/edit/${id}`, {
            "price": price,
            "name": name,
            "imgUrl": imgUrl,
            "materials": materials
        }, { headers: authHeader() })
    },
    registerUser: (username, name, surname, password, role, address) => {
        return axios.post("/auth/signup", {
            "username": username,
            "name": name,
            "surname": surname,
            "password": password,
            "role": role,
            "address": address
        }, { headers: authHeader() })
    },
    addSuggestion: (text) => {
        return axios.post("/suggestions", {
            "text": text
        }, { headers: authHeader() })
    }
}

export default ECandleRepository;