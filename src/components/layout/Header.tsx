import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChefHat, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 shadow-[0_2px_16px_0_rgba(255,255,255,0.04)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-white" />
          <span className="font-bold text-lg text-white">Staffing Connect</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">For Job Seekers</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">For Employers</Button>
          <Button className="bg-white text-black hover:bg-white/80">Sign In <LogIn className="ml-2 h-4 w-4 text-black" /></Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
