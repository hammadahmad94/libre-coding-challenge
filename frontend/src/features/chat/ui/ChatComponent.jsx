import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

export default function ChatComponent() {
  return (
    <Paper sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Chat Interface Loading...
        </Typography>
      </Box>
    </Paper>
  );
}
