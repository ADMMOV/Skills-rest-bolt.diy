import { useUserStore } from '@/stores/userStore';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated, user, onboardingStep } = useUserStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (onboardingStep === 'role') {
    return <Navigate to="/onboarding/select-role" state={{ from: location }} replace />;
  }

  if (onboardingStep === 'profile' && user?.role) {
    const rolePath = user.role.replace('_', '-');
    return <Navigate to={`/onboarding/${rolePath}`} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
