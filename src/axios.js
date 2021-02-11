import axios from "axios"

const instance = axios.create({
    baseURL: "https://personalised-spotify.herokuapp.com"
})

export default instance