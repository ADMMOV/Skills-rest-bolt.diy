import { motion } from 'framer-motion';
import { mockJobSeeker, mockAvailableJobs, mockAppliedJobs } from '@/lib/mockData';
import FilterBar from '@/components/dashboard/job-seeker/FilterBar';
import JobCard from '@/components/dashboard/job-seeker/JobCard';
import AppliedJobsSummary from '@/components/dashboard/job-seeker/AppliedJobsSummary';

const JobSeekerDashboardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white glass-section p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight neon-text">
            Hi, {mockJobSeeker.name}!
          </h1>
          <p className="mt-1 text-white/70">
            Here are the latest shifts available for you. Let's get to work.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <main className="lg:col-span-2 space-y-6">
            <FilterBar />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAvailableJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </main>
          <aside className="lg:col-span-1 lg:sticky top-24">
            <AppliedJobsSummary jobs={mockAppliedJobs} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboardPage;
