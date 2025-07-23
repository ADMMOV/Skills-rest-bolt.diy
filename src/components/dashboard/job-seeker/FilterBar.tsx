import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SlidersHorizontal, Search } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="bg-card p-4 rounded-lg border border-border mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by role or employer..." className="pl-10 bg-background" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Today</Button>
          <Button variant="outline" className="flex-1">Tomorrow</Button>
          <Button variant="outline" className="flex-1">This Week</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">{'< 5km'}</Button>
          <Button variant="outline" className="flex-1">{'< 10km'}</Button>
          <Button variant="outline" className="flex-1">Any Distance</Button>
        </div>
        <Button className="w-full lg:w-auto">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
