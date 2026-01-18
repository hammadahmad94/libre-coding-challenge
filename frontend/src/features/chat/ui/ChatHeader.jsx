import { Box, Typography } from '@mui/material';
import { Bot } from 'lucide-react';

export default function ChatHeader() {
  return (
    <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper' }}>
      <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Bot size={20} className="text-blue-500" />
        Roadmap AI
      </Typography>
    </Box>
  );
}
