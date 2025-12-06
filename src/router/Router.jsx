import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ScholarshipsPage from "../pages/ScholarshipsPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { path: "all-scholarships", Component: ScholarshipsPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);

export default router;
