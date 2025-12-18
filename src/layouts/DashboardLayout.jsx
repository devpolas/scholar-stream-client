import useAuthContext from "../contexts/useAuthContext";
import Profile from "../components/profile/Profile";
import StudentDashboard from "../dashboard/StudentDashboard";
import ModeratorDashboard from "../dashboard/ModeratorDashboard";
import AdminDashboard from "../dashboard/AdminDashboard";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/loaders/LoadingSpinner";

export default function DashboardLayout() {
  const { user } = useAuthContext();

  const { role, isLoading } = useRole();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const dashboards = {
    Student: <StudentDashboard />,
    Moderator: <ModeratorDashboard />,
    Admin: <AdminDashboard />,
  };

  return (
    <div>
      <Profile user={user} />
      <div className='mt-4'>
        {dashboards[role] ?? (
          <p className='text-red-500'>No dashboard available for this role.</p>
        )}
      </div>
    </div>
  );
}
