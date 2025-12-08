import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ScholarshipsPage from "../pages/ScholarshipsPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ScholarshipDetails from "../pages/ScholarshipDetails";
import ErrorPage from "../pages/ErrorPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        ),
      },
      { path: "all-scholarships", Component: ScholarshipsPage },
      { path: "scholarship/:id", Component: ScholarshipDetails },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            ),
          },
        ],
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
