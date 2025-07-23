import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, Eye } from 'lucide-react';

interface AppliedJob {
  id: number;
  role: string;
  employer: string;
  status: 'Pending' | 'Viewed' | 'Hired';
}

const statusStyles = {
  Pending: 'bg-yellow-500/10 text-yellow-500',
  Viewed: 'bg-sky-500/10 text-sky-500',
  Hired: 'bg-emerald-500/10 text-emerald-500',
};

const statusIcons = {
    Pending: <Clock className="h-4 w-4" />,
    Viewed: <Eye className="h-4 w-4" />,
    Hired: <CheckCircle className="h-4 w-4" />,
}

const AppliedJobsSummary = ({ jobs }: { jobs: AppliedJob[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card border border-border rounded-xl p-6 space-y-4"
    >
      <h3 className="text-lg font-bold text-foreground">My Applications</h3>
      <ul className="space-y-3">
        {jobs.map((job) => (
          <li key={job.id} className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{job.role}</p>
              <p className="text-sm text-muted-foreground">{job.employer}</p>
            </div>
            <div className={cn("text-xs font-bold py-1 px-3 rounded-full flex items-center gap-2", statusStyles[job.status])}>
              {statusIcons[job.status]}
              {job.status}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AppliedJobsSummary;
