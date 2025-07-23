import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Checkbox } from '@/components/ui/Checkbox';
import { ArrowRight, Building, User, Briefcase, MapPin } from 'lucide-react';
import { useUserStore } from '@/stores/userStore';
import { useNavigate } from 'react-router-dom';

const EmployerOnboardingPage = () => {
  const navigate = useNavigate();
  const completeProfile = useUserStore(state => state.completeProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd submit this data to your backend.
    console.log('Submitting employer profile...');
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
            Set Up Your Employer Profile
          </h1>
          <p className="mt-2 text-white/70">
            Tell us about your business to find the best talent.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="businessName" placeholder="e.g., The Grand Hotel" required className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="contactPerson" placeholder="e.g., John Smith" required className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="businessType" placeholder="e.g., Restaurant, Hotel, Catering" required className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City / Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="city" placeholder="e.g., Los Angeles, CA" required className="pl-10" />
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="staffingNeeds">Initial Staffing Needs (Optional)</Label>
              <textarea
                id="staffingNeeds"
                placeholder="e.g., We're looking for two experienced bartenders for weekend shifts."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I accept the <a href="/terms" className="underline text-primary hover:text-primary/80">Terms and Conditions</a>
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full group">
            Find Talent Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmployerOnboardingPage;
