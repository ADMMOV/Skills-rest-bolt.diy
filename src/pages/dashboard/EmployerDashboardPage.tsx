import { motion } from 'framer-motion';
import { mockEmployer, mockActiveJobPosts, mockNewCandidatesCount } from '@/lib/mockData';
import { Button } from '@/components/ui/Button';
import { PlusCircle, Bell, Briefcase, CheckCircle } from 'lucide-react';
import SummaryCard from '@/components/dashboard/employer/SummaryCard';
import ActiveJobPost from '@/components/dashboard/employer/ActiveJobPost';

const EmployerDashboardPage = () => {
  return (
    <div className="min-h-screen text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-4xl tracking-tight text-foreground">
              Welcome, {mockEmployer.businessName}!
            </h1>
            <p className="mt-1 text-muted-foreground">
              Here's what's happening with your team today.
            </p>
          </div>
          <Button size="lg" variant="secondary" className="group">
            <PlusCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Post New Job
          </Button>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <SummaryCard 
            icon={<Briefcase className="h-6 w-6" />}
            title="Active Posts"
            value={mockActiveJobPosts.filter(p => p.status !== 'Filled').length.toString()}
            subtitle="Currently seeking talent"
            index={0}
          />
          <SummaryCard 
            icon={<Bell className="h-6 w-6" />}
            title="New Candidates"
            value={mockNewCandidatesCount.toString()}
            subtitle="Across all active posts"
            index={1}
          />
           <SummaryCard 
            icon={<CheckCircle className="h-6 w-6" />}
            title="Filled Positions"
            value={mockActiveJobPosts.filter(p => p.status === 'Filled').length.toString()}
            subtitle="This week"
            index={2}
          />
        </div>

        <div>
          <h2 className="text-3xl mb-4">Active Job Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockActiveJobPosts.map((post, index) => (
              <ActiveJobPost key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboardPage;
