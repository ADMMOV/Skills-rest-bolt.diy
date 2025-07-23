import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: {
    id: number;
    role: string;
    employer: string;
    location: string;
    distance: string;
    date: string;
    time: string;
    pay: string;
    applicationsReceived: number;
    spotsLeft: number;
  };
  index: number;
}

const JobCard = ({ job, index }: JobCardProps) => {
  const spotsIndicator = `bg-primary/10 text-primary`;
  const isHot = job.applicationsReceived > 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
    >
      {isHot && (
        <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          <span>HOT</span>
        </div>
      )}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
          <p className="text-muted-foreground">{job.employer}</p>
        </div>
        <div className={cn("text-xs font-bold py-1 px-3 rounded-full flex items-center gap-2", spotsIndicator)}>
          <Users className="h-4 w-4" />
          <span>{job.spotsLeft} Spot{job.spotsLeft > 1 ? 's' : ''} Left</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> <span>{job.location} ({job.distance})</span></div>
        <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> <span>{job.date}, {job.time}</span></div>
        <div className="flex items-center gap-2 col-span-2"><DollarSign className="h-4 w-4 text-primary" /> <span className="font-semibold text-foreground">{job.pay}</span></div>
      </div>
      <div className="mt-auto pt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{job.applicationsReceived} applications received</p>
        <Button>Apply Now</Button>
      </div>
    </motion.div>
  );
};

export default JobCard;
