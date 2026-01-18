import { Box, Typography, Button } from '@mui/material';
import { Map, Share2 } from 'lucide-react';

export default function RoadmapHeader() {
  return (
    <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
          <Map className="text-blue-500" />
          Project Roadmap
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your generated implementation plan
        </Typography>
      </Box>
      <Button 
        variant="outlined" 
        size="small" 
        startIcon={<Share2 size={16} />}
        sx={{ borderRadius: 2, textTransform: 'none', borderColor: 'rgba(255,255,255,0.2)', color: 'text.secondary' }}
      >
        Export
      </Button>
    </Box>
  );
}
