import { motion } from 'framer-motion';
import { Briefcase, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';

const RoleSelectionPage = () => {
  const navigate = useNavigate();
  const setRole = useUserStore((state) => state.setRole);

  const handleRoleSelect = (role: 'job_seeker' | 'employer', path: string) => {
    setRole(role);
    navigate(path);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-5xl tracking-wider text-foreground">
          Join As...
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Choose your path to get started. You can always change this later.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <RoleCard
            icon={<User className="h-10 w-10" />}
            title="Job Seeker"
            description="Find flexible shifts, get paid quickly, and build your reputation."
            onClick={() => handleRoleSelect('job_seeker', '/onboarding/job-seeker')}
            borderColor="border-primary"
            textColor="text-primary"
          />
          <RoleCard
            icon={<Briefcase className="h-10 w-10" />}
            title="Employer"
            description="Post jobs in minutes, find qualified staff, and manage your workforce."
            onClick={() => handleRoleSelect('employer', '/onboarding/employer')}
            borderColor="border-secondary"
            textColor="text-secondary"
          />
        </div>
      </motion.div>
    </div>
  );
};

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  borderColor: string;
  textColor: string;
}

const RoleCard = ({ icon, title, description, onClick, borderColor, textColor }: RoleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, boxShadow: '0 0 15px hsl(var(--card-foreground) / 0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className={`cursor-pointer bg-card border rounded-lg p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 ${borderColor} hover:bg-card/80`}
    >
      <div className={textColor}>{icon}</div>
      <h2 className="text-3xl text-foreground">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default RoleSelectionPage;
