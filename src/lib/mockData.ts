export const mockJobSeeker = {
  name: 'Alex Doe',
};

export const mockEmployer = {
  businessName: 'The Grand Bistro',
};

export const mockAvailableJobs = [
  {
    id: 1,
    role: 'Lead Bartender',
    employer: 'The Rooftop Lounge',
    location: 'Downtown, NY',
    distance: '2.5km',
    date: 'Today',
    time: '6:00 PM - 1:00 AM',
    pay: '$25/hr + tips',
    applicationsReceived: 3,
    spotsLeft: 1,
  },
  {
    id: 2,
    role: 'Server',
    employer: 'Seaside Grill',
    location: 'Marina District, NY',
    distance: '8.1km',
    date: 'Tomorrow',
    time: '11:00 AM - 4:00 PM',
    pay: '$18/hr + tips',
    applicationsReceived: 12,
    spotsLeft: 3,
  },
  {
    id: 3,
    role: 'Kitchen Hand',
    employer: 'The Grand Bistro',
    location: 'Uptown, NY',
    distance: '5.4km',
    date: 'Today',
    time: '4:00 PM - 11:00 PM',
    pay: '$20/hr',
    applicationsReceived: 7,
    spotsLeft: 2,
  },
  {
    id: 4,
    role: 'Host/Hostess',
    employer: 'The Italian Corner',
    location: 'Little Italy, NY',
    distance: '3.2km',
    date: 'Tomorrow',
    time: '5:00 PM - 10:00 PM',
    pay: '$19/hr',
    applicationsReceived: 5,
    spotsLeft: 1,
  },
];

export const mockAppliedJobs = [
  { id: 1, role: 'Barista', employer: 'Morning Brew Cafe', status: 'Pending' },
  { id: 2, role: 'Event Staff', employer: 'City Conference Center', status: 'Viewed' },
  { id: 3, role: 'Line Cook', employer: 'The Steakhouse', status: 'Hired' },
];

export const mockEmployerNeeds = [
    { id: 1, text: '1 Server needed for Saturday brunch shift.' },
    { id: 2, text: '2 Bartenders for Friday night event.' },
];

export const mockActiveJobPosts = [
    { id: 1, role: 'Server', date: 'Saturday, Aug 26', candidatesApplied: 15, hired: 2, totalNeeded: 3 },
    { id: 2, role: 'Bartender', date: 'Friday, Aug 25', candidatesApplied: 22, hired: 2, totalNeeded: 2, status: 'Filled' },
    { id: 3, role: 'Chef de Partie', date: 'Ongoing', candidatesApplied: 8, hired: 0, totalNeeded: 1 },
];

export const mockNewCandidatesCount = 7;
