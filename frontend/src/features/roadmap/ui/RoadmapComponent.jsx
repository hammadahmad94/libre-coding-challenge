import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

export default function RoadmapComponent() {
  return (
    <Paper sx={{ height: '100%', p: 2, bgcolor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Typography variant="h6" color="text.secondary">
          Roadmap Board
        </Typography>
      </Box>
    </Paper>
  );
}
