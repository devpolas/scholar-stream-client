import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "../contexts/useAuthContext";

const instance = axios.create({
  baseURL: "https://scholar-stream-server-jade.vercel.app/api/v1",
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
