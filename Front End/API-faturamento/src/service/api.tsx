import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.message);
      } else {
        console.log("Erro na requisição");
      }
    }
  }
);
