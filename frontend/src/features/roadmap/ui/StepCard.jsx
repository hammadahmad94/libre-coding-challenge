import { Card, CardContent, Typography, Box, Chip, IconButton, Tooltip } from '@mui/material';
import { Clock, CheckCircle2, Circle, Edit2, Trash2 } from 'lucide-react';

export default function StepCard({ step, index }) {
  const isCompleted = step.status === 'completed';

  return (
    <Card 
      elevation={0}
      sx={{ 
        bgcolor: 'background.paper', 
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 3,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          borderColor: 'primary.main'
        }
      }}
    >
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box 
              sx={{ 
                mt: 0.5,
                color: isCompleted ? 'success.main' : 'text.disabled'
              }}
            >
              {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem', mb: 0.5 }}>
                {step.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Chip 
                  label={`Step ${index + 1}`} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(59, 130, 246, 0.1)', 
                    color: 'primary.main',
                    fontWeight: 600,
                    height: 24
                  }} 
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: '0.875rem' }}>
                  <Clock size={14} />
                  {step.estimatedTime}
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Tooltip title="Coming in V2">
              <IconButton size="small" sx={{ opacity: 0.5 }}>
                <Edit2 size={16} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Coming in V2">
              <IconButton size="small" sx={{ opacity: 0.5, color: 'error.main' }}>
                <Trash2 size={16} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ pl: 5, lineHeight: 1.6 }}>
          {step.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
