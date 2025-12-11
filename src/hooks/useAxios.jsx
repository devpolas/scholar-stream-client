import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./../contexts/useAuthContext";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export default function useAxiosSecure() {
  const { user } = useAuthContext();

  useEffect(() => {
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
  }, [user]);

  return instance;
}
