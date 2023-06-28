import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    api_key: process.env.API_KEY,
    language: "ko-KR",
  },
});

export default instance;
