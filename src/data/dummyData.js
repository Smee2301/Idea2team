// ============================================
// Idea2Team — Static Dummy Data
// ============================================

export const users = [
  { id: 1, name: 'Alex Morgan', email: 'alex@idea2team.com', role: 'Founder', initials: 'AM', color: '#4f46e5', status: 'Active', joinDate: 'Jan 15, 2026' },
  { id: 2, name: 'Sarah Chen', email: 'sarah@freelance.com', role: 'Freelancer', initials: 'SC', color: '#7c3aed', status: 'Active', joinDate: 'Feb 02, 2026' },
  { id: 3, name: 'Marcus Johnson', email: 'marcus@dev.io', role: 'Freelancer', initials: 'MJ', color: '#059669', status: 'Active', joinDate: 'Jan 28, 2026' },
  { id: 4, name: 'Emily Davis', email: 'emily@startup.co', role: 'Founder', initials: 'ED', color: '#dc2626', status: 'Pending', joinDate: 'Feb 10, 2026' },
  { id: 5, name: 'Raj Patel', email: 'raj@designer.com', role: 'Freelancer', initials: 'RP', color: '#ea580c', status: 'Active', joinDate: 'Jan 20, 2026' },
  { id: 6, name: 'Lisa Wong', email: 'lisa@marketing.io', role: 'Freelancer', initials: 'LW', color: '#0891b2', status: 'Active', joinDate: 'Feb 05, 2026' },
  { id: 7, name: 'James Wilson', email: 'james@tech.com', role: 'Founder', initials: 'JW', color: '#4f46e5', status: 'Suspended', joinDate: 'Dec 12, 2025' },
  { id: 8, name: 'Nina Rodriguez', email: 'nina@design.co', role: 'Freelancer', initials: 'NR', color: '#be185d', status: 'Active', joinDate: 'Feb 12, 2026' },
];

export const projects = [
  {
    id: 1,
    title: 'AI-Powered SaaS Dashboard',
    company: 'TechVista Inc.',
    founder: 'Alex Morgan',
    description: 'Build a modern analytics dashboard with AI-powered insights, real-time data visualization, and automated reporting features for enterprise clients.',
    budget: '$12,000 - $18,000',
    category: 'Web Development',
    skills: ['React', 'Node.js', 'Python', 'TensorFlow'],
    status: 'Active',
    applications: 14,
    deadline: 'Mar 30, 2026',
    postedDate: 'Feb 01, 2026',
    duration: '3 months',
  },
  {
    id: 2,
    title: 'Mobile Fitness App Redesign',
    company: 'FitFlow Labs',
    founder: 'Emily Davis',
    description: 'Complete redesign of our fitness tracking mobile application with new workout features, social integration, and gamification elements.',
    budget: '$8,000 - $12,000',
    category: 'Mobile App',
    skills: ['React Native', 'Figma', 'Firebase'],
    status: 'Active',
    applications: 8,
    deadline: 'Apr 15, 2026',
    postedDate: 'Feb 05, 2026',
    duration: '2 months',
  },
  {
    id: 3,
    title: 'E-commerce Platform Migration',
    company: 'ShopSphere Co.',
    founder: 'James Wilson',
    description: 'Migrate existing e-commerce platform from legacy PHP to modern Next.js stack with improved performance and SEO capabilities.',
    budget: '$15,000 - $25,000',
    category: 'Web Development',
    skills: ['Next.js', 'PostgreSQL', 'AWS', 'Docker'],
    status: 'Active',
    applications: 22,
    deadline: 'May 01, 2026',
    postedDate: 'Jan 28, 2026',
    duration: '4 months',
  },
  {
    id: 4,
    title: 'Brand Identity & Logo Design',
    company: 'NovaBrand Studio',
    founder: 'Alex Morgan',
    description: 'Create a complete brand identity package including logo, color palette, typography system, and brand guidelines document.',
    budget: '$3,000 - $5,000',
    category: 'Design',
    skills: ['Illustrator', 'Figma', 'Branding'],
    status: 'Completed',
    applications: 31,
    deadline: 'Feb 15, 2026',
    postedDate: 'Jan 10, 2026',
    duration: '3 weeks',
  },
  {
    id: 5,
    title: 'Blockchain Voting System',
    company: 'CivicTech Solutions',
    founder: 'Emily Davis',
    description: 'Develop a secure, transparent voting system using blockchain technology for corporate governance and community decision-making.',
    budget: '$20,000 - $35,000',
    category: 'Blockchain',
    skills: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    status: 'Active',
    applications: 7,
    deadline: 'Jun 30, 2026',
    postedDate: 'Feb 08, 2026',
    duration: '5 months',
  },
  {
    id: 6,
    title: 'Marketing Analytics Tool',
    company: 'GrowthMetrics',
    founder: 'James Wilson',
    description: 'Build a comprehensive marketing analytics tool with campaign tracking, ROI analysis, and automated reporting dashboards.',
    budget: '$10,000 - $16,000',
    category: 'Data & Analytics',
    skills: ['Python', 'D3.js', 'PostgreSQL', 'React'],
    status: 'Pending',
    applications: 0,
    deadline: 'Apr 30, 2026',
    postedDate: 'Feb 14, 2026',
    duration: '3 months',
  },
];

export const applications = [
  { id: 1, freelancer: 'Sarah Chen', freelancerInitials: 'SC', project: 'AI-Powered SaaS Dashboard', status: 'Under Review', date: 'Feb 10, 2026', coverLetter: 'Experienced in building ML-powered dashboards...', bid: '$14,500' },
  { id: 2, freelancer: 'Marcus Johnson', freelancerInitials: 'MJ', project: 'AI-Powered SaaS Dashboard', status: 'Shortlisted', date: 'Feb 11, 2026', coverLetter: 'Full-stack developer with 5+ years experience...', bid: '$16,000' },
  { id: 3, freelancer: 'Raj Patel', freelancerInitials: 'RP', project: 'Brand Identity & Logo Design', status: 'Accepted', date: 'Feb 08, 2026', coverLetter: 'Award-winning designer with expertise in branding...', bid: '$4,200' },
  { id: 4, freelancer: 'Lisa Wong', freelancerInitials: 'LW', project: 'Mobile Fitness App Redesign', status: 'Under Review', date: 'Feb 12, 2026', coverLetter: 'Marketing specialist turned UX designer...', bid: '$9,800' },
  { id: 5, freelancer: 'Nina Rodriguez', freelancerInitials: 'NR', project: 'E-commerce Platform Migration', status: 'Rejected', date: 'Feb 09, 2026', coverLetter: 'Backend specialist with migration experience...', bid: '$22,000' },
  { id: 6, freelancer: 'Sarah Chen', freelancerInitials: 'SC', project: 'Marketing Analytics Tool', status: 'Under Review', date: 'Feb 15, 2026', coverLetter: 'Data analysis background with visualization skills...', bid: '$12,500' },
];

export const tasks = {
  todo: [
    { id: 1, title: 'Design System Components', description: 'Create reusable button, card, and form components', priority: 'high', assignee: 'SC', dueDate: 'Feb 20' },
    { id: 2, title: 'API Documentation', description: 'Write comprehensive API docs for all endpoints', priority: 'medium', assignee: 'MJ', dueDate: 'Feb 22' },
    { id: 3, title: 'User Testing Plan', description: 'Create user testing scenarios and scripts', priority: 'low', assignee: 'RP', dueDate: 'Feb 25' },
  ],
  inProgress: [
    { id: 4, title: 'Dashboard Analytics', description: 'Implement real-time analytics charts and graphs', priority: 'high', assignee: 'MJ', dueDate: 'Feb 18' },
    { id: 5, title: 'Authentication Flow', description: 'Build login, register, and password reset flows', priority: 'high', assignee: 'SC', dueDate: 'Feb 19' },
  ],
  done: [
    { id: 6, title: 'Project Setup', description: 'Initialize project with React, Router, and styling', priority: 'high', assignee: 'MJ', dueDate: 'Feb 10' },
    { id: 7, title: 'Wireframe Approval', description: 'Get stakeholder approval on wireframes', priority: 'medium', assignee: 'RP', dueDate: 'Feb 08' },
    { id: 8, title: 'Database Schema', description: 'Design and document the database schema', priority: 'high', assignee: 'SC', dueDate: 'Feb 12' },
  ],
};

export const messages = [
  { id: 1, sender: 'Sarah Chen', initials: 'SC', color: '#7c3aed', text: 'Hey team! I just finished the initial wireframes for the dashboard. Check them out in the files section.', time: '10:32 AM', own: false },
  { id: 2, sender: 'You', initials: 'AM', color: '#4f46e5', text: 'These look great, Sarah! Love the card layout for the analytics section. Can we add a dark mode toggle?', time: '10:35 AM', own: true },
  { id: 3, sender: 'Marcus Johnson', initials: 'MJ', color: '#059669', text: 'I\'ll start working on the API integration for the charts. Should have the real-time updates ready by Thursday.', time: '10:38 AM', own: false },
  { id: 4, sender: 'Raj Patel', initials: 'RP', color: '#ea580c', text: 'The color palette looks perfect. I\'ll prepare the brand assets and icon set by tomorrow morning.', time: '10:42 AM', own: false },
  { id: 5, sender: 'You', initials: 'AM', color: '#4f46e5', text: 'Perfect! Let\'s sync up tomorrow at 2 PM to review progress. I\'ll send calendar invites shortly. 🚀', time: '10:45 AM', own: true },
];

export const milestones = [
  { id: 1, title: 'Project Kickoff', date: 'Feb 01, 2026', description: 'Initial meeting, scope definition, and team setup', status: 'completed' },
  { id: 2, title: 'Design Phase', date: 'Feb 15, 2026', description: 'Wireframes, mockups, and design system creation', status: 'completed' },
  { id: 3, title: 'Development Sprint 1', date: 'Mar 01, 2026', description: 'Core features implementation and API development', status: 'current' },
  { id: 4, title: 'Testing & QA', date: 'Mar 15, 2026', description: 'Comprehensive testing, bug fixes, and optimization', status: 'upcoming' },
  { id: 5, title: 'Launch', date: 'Mar 30, 2026', description: 'Final deployment, monitoring setup, and handoff', status: 'upcoming' },
];

export const files = [
  { id: 1, name: 'Dashboard_Wireframes.fig', size: '4.2 MB', icon: '🎨' },
  { id: 2, name: 'API_Documentation.pdf', size: '1.8 MB', icon: '📄' },
  { id: 3, name: 'Brand_Guidelines.pdf', size: '12.5 MB', icon: '📄' },
  { id: 4, name: 'meeting_notes_feb14.docx', size: '245 KB', icon: '📝' },
  { id: 5, name: 'database_schema.sql', size: '18 KB', icon: '🗃️' },
];

export const teamMembers = [
  { id: 1, name: 'Sarah Chen', role: 'UI/UX Designer', initials: 'SC', color: '#7c3aed', online: true },
  { id: 2, name: 'Marcus Johnson', role: 'Full-Stack Developer', initials: 'MJ', color: '#059669', online: true },
  { id: 3, name: 'Raj Patel', role: 'Brand Designer', initials: 'RP', color: '#ea580c', online: false },
  { id: 4, name: 'Lisa Wong', role: 'Marketing Lead', initials: 'LW', color: '#0891b2', online: true },
];

export const founderStats = [
  { label: 'Active Projects', value: '5', trend: '+2 this month', trendDir: 'up', icon: '📁', colorClass: 'primary' },
  { label: 'Applications', value: '47', trend: '+12 this week', trendDir: 'up', icon: '📨', colorClass: 'info' },
  { label: 'Active Teams', value: '3', trend: 'Same as last month', trendDir: 'up', icon: '👥', colorClass: 'success' },
  { label: 'Total Spent', value: '$24,500', trend: '+$8,200', trendDir: 'up', icon: '💰', colorClass: 'warning' },
];

export const freelancerStats = [
  { label: 'Applications Sent', value: '12', trend: '+4 this week', trendDir: 'up', icon: '📤', colorClass: 'primary' },
  { label: 'Active Projects', value: '3', trend: '+1 this month', trendDir: 'up', icon: '🚀', colorClass: 'success' },
  { label: 'Total Earned', value: '$18,750', trend: '+$5,200', trendDir: 'up', icon: '💵', colorClass: 'warning' },
  { label: 'Avg. Rating', value: '4.9', trend: '+0.2', trendDir: 'up', icon: '⭐', colorClass: 'accent' },
];

export const adminStats = [
  { label: 'Total Users', value: '2,847', trend: '+156 this month', trendDir: 'up', icon: '👤', colorClass: 'primary' },
  { label: 'Active Projects', value: '342', trend: '+28 this week', trendDir: 'up', icon: '📊', colorClass: 'success' },
  { label: 'Revenue', value: '$128,400', trend: '+18.2%', trendDir: 'up', icon: '💰', colorClass: 'warning' },
  { label: 'Reports', value: '7', trend: '-3 from last week', trendDir: 'down', icon: '🚨', colorClass: 'info' },
];

export const recentActivity = [
  { text: '<strong>Sarah Chen</strong> applied to <strong>AI-Powered SaaS Dashboard</strong>', time: '2 min ago', color: '#7c3aed' },
  { text: '<strong>Marcus Johnson</strong> completed task <strong>Database Schema</strong>', time: '15 min ago', color: '#059669' },
  { text: '<strong>Alex Morgan</strong> posted new project <strong>Marketing Analytics Tool</strong>', time: '1 hour ago', color: '#4f46e5' },
  { text: '<strong>Raj Patel</strong> uploaded <strong>Brand_Guidelines.pdf</strong>', time: '2 hours ago', color: '#ea580c' },
  { text: '<strong>Lisa Wong</strong> joined workspace <strong>FitFlow Redesign</strong>', time: '3 hours ago', color: '#0891b2' },
];

export const categories = ['All', 'Web Development', 'Mobile App', 'Design', 'Blockchain', 'Data & Analytics', 'Marketing'];

export const skillOptions = ['React', 'Node.js', 'Python', 'Figma', 'AWS', 'Docker', 'PostgreSQL', 'TensorFlow', 'React Native', 'Next.js', 'Vue.js', 'Angular', 'Firebase', 'MongoDB', 'TypeScript', 'Go', 'Rust', 'Solidity', 'Web3.js', 'D3.js', 'Illustrator', 'Branding'];
