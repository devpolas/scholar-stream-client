import { createBrowserRouter } from "react-router-dom";

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
import AllScholarships from "../pages/AllScholarships";
import AboutPage from "../pages/AboutPage";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import PrivacyTerms from "../pages/PrivacyTerms";
import AdminDashboard from "./../dashboard/AdminDashboard.jsx";
import ModeratorDashboard from "./../dashboard/ModeratorDashboard.jsx";
import StudentDashboard from "./../dashboard/StudentDashboard.jsx";
import ProtectDashboardLayout from "./../layouts/ProtectDashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },

      {
        element: <PublicLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <SignupPage /> },
        ],
      },

      { path: "all-scholarships", element: <ScholarshipsPage /> },
      { path: "scholarship/:id", element: <ScholarshipDetails /> },
      { path: "privacy-terms", element: <PrivacyTerms /> },

      {
        element: <PrivateLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardLayout />, // role redirect only
            children: [
              {
                element: <ProtectDashboardLayout allowRole={["Admin"]} />,
                children: [
                  {
                    path: "admin",
                    element: <AdminDashboard />,
                    children: [
                      { index: true, element: <Dashboard /> },
                      { path: "users", element: <UsersPage /> },
                      {
                        path: "all-scholarships",
                        element: <AllScholarships />,
                      },
                      {
                        path: "add-scholarship",
                        element: <AddScholarshipPage />,
                      },
                      { path: "applications", element: <ApplicationsPage /> },
                      { path: "reviews", element: <ReviewsPage /> },
                    ],
                  },
                ],
              },
              {
                element: <ProtectDashboardLayout allowRole={["Moderator"]} />,
                children: [
                  {
                    path: "moderator",
                    element: <ModeratorDashboard />,
                    children: [
                      { index: true, element: <Dashboard /> },
                      { path: "applications", element: <ApplicationsPage /> },
                      { path: "reviews", element: <ReviewsPage /> },
                    ],
                  },
                ],
              },
              {
                element: <ProtectDashboardLayout allowRole={["Student"]} />,
                children: [
                  {
                    path: "student",
                    element: <StudentDashboard />,
                    children: [
                      { index: true, element: <Dashboard /> },
                      { path: "reviews", element: <ReviewsPage /> },
                      { path: "applications", element: <ApplicationsPage /> },
                      { path: "payments", element: <PaymentsPage /> },
                      {
                        path: "payment-success",
                        element: <PaymentsSuccessPage />,
                      },
                      {
                        path: "payment-failed",
                        element: <PaymentsFailedPage />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
