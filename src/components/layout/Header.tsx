import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChefHat, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg text-foreground">Staffing Connect</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost">For Job Seekers</Button>
          <Button variant="ghost">For Employers</Button>
          <Button>
            Sign In <LogIn className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
