import { Paper, Box } from '@mui/material';
import RoadmapHeader from './ui/RoadmapHeader';
import StepList from './ui/StepList';
import RoadmapSkeleton from './ui/RoadmapSkeleton';

export default function RoadmapComponent({ isLoading = false, data }) {
  const steps = data?.steps || [];

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, bgcolor: 'background.default' }}>
      <RoadmapHeader />
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {isLoading ? (
            <RoadmapSkeleton />
        ) : (
           <StepList steps={steps} />
        )}
      </Box>
    </Paper>
  );
}
