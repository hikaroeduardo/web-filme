import axios from "axios";

// Chave: 589bfd98d3915f46941989a45cb2773c

const Api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default Api;