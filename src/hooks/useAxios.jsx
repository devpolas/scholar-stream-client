import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: serverUrl,
});

export default function useAxios() {
  return instance;
}
