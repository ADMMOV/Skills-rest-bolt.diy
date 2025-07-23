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
    <div className="min-h-screen w-full flex items-center justify-center glass-section p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-5xl tracking-wider neon-text">
          Join As...
        </h1>
        <p className="mt-3 text-lg text-white/70">
          Choose your path to get started. You can always change this later.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <RoleCard
            icon={<User className="h-10 w-10 text-primary neon-text" />}
            title="Job Seeker"
            description="Find flexible shifts, get paid quickly, and build your reputation."
            onClick={() => handleRoleSelect('job_seeker', '/onboarding/job-seeker')}
            borderColor="border-white/20"
            textColor="text-white"
          />
          <RoleCard
            icon={<Briefcase className="h-10 w-10 text-secondary neon-text" />}
            title="Employer"
            description="Post jobs in minutes, find qualified staff, and manage your workforce."
            onClick={() => handleRoleSelect('employer', '/onboarding/employer')}
            borderColor="border-white/20"
            textColor="text-white"
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
      whileHover={{ y: -8, scale: 1.03, boxShadow: '0 0 24px #fff4' }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className={`cursor-pointer glass-card border rounded-xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 ${borderColor} hover:bg-white/5`}
    >
      <div className={textColor}>{icon}</div>
      <h2 className="text-3xl text-white neon-text">{title}</h2>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default RoleSelectionPage;
