import { RouterProvider } from "react-router";
import router from "./router/Router";
import AuthContextProvider from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
