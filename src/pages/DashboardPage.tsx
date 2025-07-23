import { useUserStore } from '@/stores/userStore';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const DashboardPage = () => {
  const user = useUserStore(state => state.user);
  const logout = useUserStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen glass-section p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center glass-card shadow-xl"
      >
        <h1 className="text-4xl font-bold neon-text">Welcome to your Dashboard!</h1>
        <p className="mt-2 text-lg text-white/70">
          You are logged in as: <span className="font-semibold text-primary neon-text">{user?.email}</span>
        </p>
        <p className="mt-1 text-md text-white/70">
          Your role is: <span className="font-semibold text-primary capitalize neon-text">{user?.role?.replace('_', ' ')}</span>
        </p>
        <p className="mt-6 max-w-md mx-auto">
          This is your central hub. From here, you'll be able to manage your profile, view job postings or applicants, and handle your schedule.
        </p>
        <Button onClick={handleLogout} className="mt-8 group glass-card neon-text shadow-lg">
          Log Out <LogOut className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
