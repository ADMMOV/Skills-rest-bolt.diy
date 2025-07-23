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
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Welcome to your Dashboard!</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          You are logged in as: <span className="font-semibold text-primary">{user?.email}</span>
        </p>
        <p className="mt-1 text-md text-muted-foreground">
          Your role is: <span className="font-semibold text-primary capitalize">{user?.role?.replace('_', ' ')}</span>
        </p>
        <p className="mt-6 max-w-md mx-auto">
          This is your central hub. From here, you'll be able to manage your profile, view job postings or applicants, and handle your schedule.
        </p>
        <Button onClick={handleLogout} className="mt-8 group">
          Log Out <LogOut className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
