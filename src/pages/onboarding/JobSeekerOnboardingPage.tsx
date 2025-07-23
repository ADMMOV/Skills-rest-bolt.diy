import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Checkbox } from '@/components/ui/Checkbox';
import { ArrowRight, User, Mail, Phone, MapPin } from 'lucide-react';
import { useUserStore } from '@/stores/userStore';
import { useNavigate } from 'react-router-dom';

const JobSeekerOnboardingPage = () => {
  const navigate = useNavigate();
  const completeProfile = useUserStore(state => state.completeProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd submit this data to your backend.
    console.log('Submitting job seeker profile...');
    completeProfile();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center glass-section p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg glass-card shadow-xl"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight neon-text">
            Set Up Your Job Seeker Profile
          </h1>
          <p className="mt-2 text-white/70">
            This helps us find the perfect shifts for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <Input id="name" placeholder="e.g., Jane Doe" required className="pl-10 bg-black border-white/10 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <Input id="email" type="email" placeholder="e.g., you@example.com" required className="pl-10 bg-black border-white/10 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <Input id="phone" type="tel" placeholder="e.g., (123) 456-7890" required className="pl-10 bg-black border-white/10 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City / Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <Input id="city" placeholder="e.g., New York, NY" required className="pl-10 bg-black border-white/10 text-white" />
              </div>
            </div>
            {/* In a real app, Job Types and Availability would be multi-select components */}
            <div className="space-y-2">
              <Label>Preferred Job Types</Label>
              <Input placeholder="Bartender, Server, Kitchen Hand" className="bg-black border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label>General Availability</Label>
              <Input placeholder="Weekends, Evenings" className="bg-black border-white/10 text-white" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm text-white/70">
              I accept the <a href="/terms" className="underline text-white hover:text-white/80">Terms and Conditions</a>
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full group">
            Complete Profile <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default JobSeekerOnboardingPage;
