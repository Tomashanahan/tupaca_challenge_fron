import axios from "axios";

export function useAxios() {
  const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return { api };
}
