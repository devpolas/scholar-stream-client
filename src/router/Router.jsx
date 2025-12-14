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
import AnalyticsPage from "../pages/AnalyticsPage";

// import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <p>Loading.....</p>,
    errorElement: <ErrorPage />,
    id: "root",
    loader: async () => fetch("http://localhost:8000/api/v1/scholarships"),
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
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
            Component: ApplicationsPage,
          },
          { path: "reviews", Component: ReviewsPage },
          { path: "add-scholarship", Component: AddScholarshipPage },
          { path: "users", Component: UsersPage },
          { path: "analytics", Component: AnalyticsPage },
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
