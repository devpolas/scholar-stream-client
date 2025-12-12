import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ScholarshipsPage from "../pages/ScholarshipsPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ScholarshipDetails from "../pages/ScholarshipDetails";
import ErrorPage from "../pages/ErrorPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Applications from "../components/applications/Applications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    id: "root",
    loader: async () => fetch("http://localhost:8000/api/v1/scholarships"),
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
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: "true",
            path: "applications",
            Component: Applications,
          },
          { path: "reviews" },
          { path: "payments" },
          { path: "add-scholarship" },
          { path: "users" },
          { path: "analytics" },
          { path: "payment-success" },
          { path: "payment-failed" },
        ],
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
