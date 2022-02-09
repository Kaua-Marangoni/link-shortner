import axios from "axios"

export const key = "115acdd2eab55b202acf88fd871f3621d7a23c7a"

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    "Authorization": `Bearer ${key}`
  }
})

export default api