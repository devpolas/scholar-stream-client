import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "../contexts/useAuthContext";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: serverUrl,
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
