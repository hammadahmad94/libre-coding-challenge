import { Box } from '@mui/material';
import StepCard from './StepCard';

export default function StepList({ steps }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      {steps.map((step, index) => (
        <StepCard key={step.id} step={step} index={index} />
      ))}
    </Box>
  );
}
