import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "../contexts/useAuthContext";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export default function useAxiosSecure() {
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user?.accessToken;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);
  return instance;
}
