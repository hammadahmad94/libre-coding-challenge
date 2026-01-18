import { useState } from 'react';
import { Paper, Box } from '@mui/material';
import RoadmapHeader from './ui/RoadmapHeader';
import StepList from './ui/StepList';

export default function RoadmapComponent() {
  // Mock Data for MVP visualization
  const [steps] = useState([
    {
      id: 1,
      title: 'Define Target Audience',
      description: 'Identify the primary demographics and psychographics for the newsletter. Create user personas to guide content strategy.',
      estimatedTime: '2 Days',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Choose Platforms',
      description: 'Evaluate Substack, Ghost, and ConvertKit. Select the platform that best aligns with the monetization strategy.',
      estimatedTime: '1 Day',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Draft Welcome Email',
      description: 'Write a compelling welcome email that sets expectations and delivers immediate value (lead magnet).',
      estimatedTime: '3 Hours',
      status: 'pending'
    }
  ]);

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, bgcolor: 'background.default' }}>
      <RoadmapHeader />
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
         <StepList steps={steps} />
      </Box>
    </Paper>
  );
}
