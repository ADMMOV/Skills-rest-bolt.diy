import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import RoleSelectionPage from './pages/onboarding/RoleSelectionPage';
import JobSeekerOnboardingPage from './pages/onboarding/JobSeekerOnboardingPage';
import EmployerOnboardingPage from './pages/onboarding/EmployerOnboardingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardRedirectPage from './pages/dashboard/DashboardRedirectPage';
import JobSeekerDashboardPage from './pages/dashboard/JobSeekerDashboardPage';
import EmployerDashboardPage from './pages/dashboard/EmployerDashboardPage';

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/login') || location.pathname.startsWith('/splash');
  const isDashboard = location.pathname.startsWith('/dashboard');

  // A more robust way to hide header/footer on specific layouts
  const showLayout = !isAuthRoute;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {showLayout && !isDashboard && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/splash" element={<SplashPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Onboarding Routes */}
          <Route path="/onboarding/select-role" element={<RoleSelectionPage />} />
          <Route path="/onboarding/job-seeker" element={<JobSeekerOnboardingPage />} />
          <Route path="/onboarding/employer" element={<EmployerOnboardingPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardRedirectPage />} />
            <Route path="/dashboard/job-seeker" element={<JobSeekerDashboardPage />} />
            <Route path="/dashboard/employer" element={<EmployerDashboardPage />} />
          </Route>
        </Routes>
      </main>
      {showLayout && !isDashboard && <Footer />}
    </div>
  );
}

export default App;
