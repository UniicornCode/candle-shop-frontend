import axios from "../custom-axios/axios";

const ECandleRepository = {
    fetchCandles: () => {
        return axios.get("/candles");
    },
    fetchMaterials: () => {
        return axios.get("/materials");
    },
    fetchSuggestions: () => {
        return axios.get("/suggestions");
    },
    addCandle: (price, name, imgUrl, materials) => {
        return axios.post("/candles/add", {
            "price": price,
            "name": name,
            "imgUrl": imgUrl,
            "materials": materials
        })
    }
}

export default ECandleRepository;