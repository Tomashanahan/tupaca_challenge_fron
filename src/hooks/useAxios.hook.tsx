import axios from "axios";
import { useLayoutEffect } from "react";

export function useAxios() {
  const token = localStorage.getItem("token");
  console.log("token:", token);

  useLayoutEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return () => {
      axios.defaults.headers.common["Authorization"] = null;
    };
  }, [token]);

  const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return { api };
}
