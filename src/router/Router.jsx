import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ScholarshipsPage from "../pages/ScholarshipsPage";
import ScholarshipDetails from "../pages/ScholarshipDetails";
import ApplicationsPage from "../pages/ApplicationsPage";
import ErrorPage from "../pages/ErrorPage";
import AddScholarshipPage from "../pages/AddScholarshipPage";
import ReviewsPage from "../pages/ReviewsPage";
import UsersPage from "../pages/UsersPage";
import PaymentsPage from "../pages/PaymentsPage";
import PaymentsSuccessPage from "../pages/PaymentsSuccessPage";
import PaymentsFailedPage from "../pages/PaymentsFailedPage";
import Dashboard from "../pages/Dashboard";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AllScholarships from "../pages/AllScholarships";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
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
            {" "}
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
            index: true,
            Component: Dashboard,
          },
          {
            path: "applications",
            Component: ApplicationsPage,
          },
          { path: "reviews", Component: ReviewsPage },
          { path: "add-scholarship", Component: AddScholarshipPage },
          { path: "all-scholarships", Component: AllScholarships },
          { path: "users", Component: UsersPage },
          { path: "payments", Component: PaymentsPage },
          { path: "payment-success", Component: PaymentsSuccessPage },
          { path: "payment-failed", Component: PaymentsFailedPage },
        ],
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
