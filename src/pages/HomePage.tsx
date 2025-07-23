import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, CalendarCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ icon, title, description, className }: { icon: React.ReactNode; title: string; description: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={cn("bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center flex flex-col items-center", className)}
  >
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const HowItWorksStep = ({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: number }) => (
    <motion.div 
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
        viewport={{ once: true }}
    >
        <div className="relative mb-4">
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary">
                {icon}
            </div>
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-background">{step}</span>
        </div>
        <h3 className="font-bold text-lg mb-1 text-foreground">{title}</h3>
        <p className="text-muted-foreground max-w-xs">{description}</p>
    </motion.div>
);


const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-center py-32 md:py-48 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", filter: 'grayscale(80%) brightness(0.3)' }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            The Future of Hospitality Staffing is Here.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Instantly connect with skilled hospitality professionals or find flexible shifts that fit your life. Effortless, reliable, and on-demand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Find Your Next Shift <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Hire Top Talent
            </Button>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How It Works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">A seamless process for both employers and job seekers.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <HowItWorksStep step={1} icon={<Users size={28} />} title="Create Your Profile" description="Sign up as a job seeker or employer and build a profile that highlights your skills or business needs." />
            <HowItWorksStep step={2} icon={<Briefcase size={28} />} title="Post or Find Jobs" description="Employers post shifts in minutes. Job seekers discover and apply for opportunities that match their criteria instantly." />
            <HowItWorksStep step={3} icon={<CalendarCheck size={28} />} title="Connect & Work" description="Get matched, communicate directly, and get to work. We handle the logistics so you can focus on what you do best." />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-card/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Designed for the Modern Hospitality World</h2>
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
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Join Hospitality Staffing Connect today and revolutionize the way you work or hire.</p>
          <Button size="lg" className="group">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
