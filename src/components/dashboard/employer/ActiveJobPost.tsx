import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Users, CheckCircle, Calendar } from 'lucide-react';

interface ActiveJobPostProps {
  post: {
    id: number;
    role: string;
    date: string;
    candidatesApplied: number;
    hired: number;
    totalNeeded: number;
    status?: 'Filled';
  };
  index: number;
}

const ActiveJobPost = ({ post, index }: ActiveJobPostProps) => {
  const progress = (post.hired / post.totalNeeded) * 100;
  const isFilled = post.status === 'Filled';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between transition-all hover:border-primary hover:shadow-neon-primary"
    >
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-xl text-foreground">{post.role}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
          {isFilled && (
            <div className="text-xs font-bold py-1 px-3 rounded-full flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20">
              <CheckCircle className="h-4 w-4" />
              Filled
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-muted-foreground">Hired</span>
            <span className="font-semibold text-foreground">{post.hired} / {post.totalNeeded}</span>
          </div>
          <div className="w-full bg-background rounded-full h-2.5 border border-border">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-semibold">{post.candidatesApplied}</span>
          <span className="text-muted-foreground">Applicants</span>
        </div>
        <Button variant="outline" size="sm">View Applicants</Button>
      </div>
    </motion.div>
  );
};

export default ActiveJobPost;
