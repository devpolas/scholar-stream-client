import axios from "axios";

const instance = axios.create({
  baseURL: "https://scholar-stream-server-jade.vercel.app/api/v1",
});

export default function useAxios() {
  return instance;
}
