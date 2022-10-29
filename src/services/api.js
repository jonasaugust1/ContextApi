import axios from "axios";

const api = axios.create({
    baseURL: "https://0d23-177-20-221-199.sa.ngrok.io"
})

export default api