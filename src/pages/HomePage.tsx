import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, CalendarCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, className }: { icon: React.ReactNode; title: string; description: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={cn("glass-card border border-white/10 rounded-xl p-6 text-center flex flex-col items-center shadow-lg", className)}
  >
    <div className="mb-4 text-primary neon-text">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white neon-text">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

const HowItWorksStep = ({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: number }) => (
    <motion.div 
        className="flex flex-col items-center text-center glass-card border border-white/10 rounded-xl p-6 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
        viewport={{ once: true }}
    >
        <div className="relative mb-4">
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary neon-text shadow-lg">
                {icon}
            </div>
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-background neon-text shadow-md">{step}</span>
        </div>
        <h3 className="font-bold text-lg mb-1 text-white neon-text">{title}</h3>
        <p className="text-white/70 max-w-xs">{description}</p>
    </motion.div>
);


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-center py-32 md:py-48 px-4 overflow-hidden glass-section">
        <div className="absolute inset-0 -z-10 h-full w-full bg-black/80 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", filter: 'grayscale(80%) brightness(0.3)' }} />
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight neon-text">
            The Future of <span className="text-primary">Hospitality Staffing</span> is Here.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Instantly connect with skilled hospitality professionals or find flexible shifts that fit your life. Effortless, reliable, and on-demand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group neon-text shadow-lg" onClick={() => navigate('/login')}>
              Find Your Next Shift <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="shadow-lg">
              Hire Top Talent
            </Button>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 glass-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-text">How It Works</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">A seamless process for both employers and job seekers.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <HowItWorksStep step={1} icon={<Users size={28} />} title="Create Your Profile" description="Sign up as a job seeker or employer and build a profile that highlights your skills or business needs." />
            <HowItWorksStep step={2} icon={<Briefcase size={28} />} title="Post or Find Jobs" description="Employers post shifts in minutes. Job seekers discover and apply for opportunities that match their criteria instantly." />
            <HowItWorksStep step={3} icon={<CalendarCheck size={28} />} title="Connect & Work" description="Get matched, communicate directly, and get to work. We handle the logistics so you can focus on what you do best." />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 glass-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text">Designed for the Modern Hospitality World</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Briefcase size={32} />}
              title="Flexible Shifts"
              description="Find work that fits your schedule. From one-off gigs to recurring shifts, you're in control."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Vetted Professionals"
              description="Access a pool of skilled and reliable hospitality staff ready to elevate your business."
            />
            <FeatureCard
              icon={<CalendarCheck size={32} />}
              title="Instant Booking"
              description="No more waiting. Post a job and get applications in minutes. Hire staff with a single click."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center glass-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Ready to Get Started?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">Join Hospitality Staffing Connect today and revolutionize the way you work or hire.</p>
          <Button size="lg" className="group neon-text shadow-lg">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
