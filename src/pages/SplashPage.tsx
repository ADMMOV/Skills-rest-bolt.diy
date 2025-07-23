import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-8 text-center"
      >
        <motion.div 
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 10 }}
        >
          <div className="absolute -inset-2 bg-secondary rounded-full blur-xl opacity-50"></div>
          <div className="relative p-5 bg-card rounded-full border-2 border-secondary">
            <ChefHat className="h-20 w-20 text-secondary" />
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-display tracking-wider text-foreground animate-text-glow" style={{'--primary': 'hsl(var(--secondary))'} as React.CSSProperties}>
            Staffing Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Your portal to the next generation of hospitality staffing.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button size="lg" variant="secondary" onClick={() => navigate('/login')} className="group">
            Enter Site <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashPage;
