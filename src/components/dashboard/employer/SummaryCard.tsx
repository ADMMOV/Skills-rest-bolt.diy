import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  className?: string;
  index: number;
}

const SummaryCard = ({ icon, title, value, subtitle, className, index }: SummaryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("bg-card border border-border rounded-lg p-6 transition-all hover:border-secondary hover:shadow-neon-secondary", className)}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-secondary/10 rounded-md text-secondary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-display text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SummaryCard;
