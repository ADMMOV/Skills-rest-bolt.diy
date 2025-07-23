import { useUserStore } from '@/stores/userStore';
import { Navigate } from 'react-router-dom';

const DashboardRedirectPage = () => {
  const { user } = useUserStore.getState(); // Use getState for synchronous access on initial render

  if (!user || !user.role) {
    // This case should be rare due to ProtectedRoute, but it's a safe fallback.
    return <Navigate to="/onboarding/select-role" replace />;
  }

  if (user.role === 'job_seeker') {
    return <Navigate to="/dashboard/job-seeker" replace />;
  }

  if (user.role === 'employer') {
    return <Navigate to="/dashboard/employer" replace />;
  }

  // Fallback for any other unexpected case
  return <Navigate to="/login" replace />;
};

export default DashboardRedirectPage;
