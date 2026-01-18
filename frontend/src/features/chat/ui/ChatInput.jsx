import { useState } from 'react';
import { Box, TextField, IconButton, Tooltip, Chip, Stack } from '@mui/material';
import { Send, Map } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  "Launch a newsletter",
  "Learn Python",
  "Run a marathon",
  "Plan a trip to Japan"
];

export default function ChatInput({ onSend, onGeneratePlan, isLoading }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSampleClick = (question) => {
      setInput(question);
      // Optional: auto-focus or auto-send? Sticking to populate for now as per plan
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      {/* Sample Questions */}
      <Stack direction="row" spacing={1} sx={{ mb: 2, overflowX: 'auto', pb: 0.5 }}>
          {SAMPLE_QUESTIONS.map((q) => (
              <Chip 
                key={q} 
                label={q} 
                onClick={() => handleSampleClick(q)} 
                size="small" 
                clickable 
                sx={{ bgcolor: 'background.default', border: '1px solid rgba(255,255,255,0.1)' }}
              />
          ))}
      </Stack>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
        <TextField
          fullWidth
          placeholder="Type your goal..."
          variant="outlined"
          size="small"
          multiline
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ 
            '& .MuiOutlinedInput-root': { 
              borderRadius: 2,
              bgcolor: 'background.default' 
            } 
          }}
        />
        
        <Tooltip title="Create a detailed roadmap based on our conversation">
            <span> {/* Span needed for Tooltip on disabled button */}
                <IconButton 
                    onClick={onGeneratePlan}
                    disabled={isLoading}
                    sx={{ 
                        bgcolor: 'secondary.main', 
                        color: 'white',
                        borderRadius: 2,
                        '&:hover': { bgcolor: 'secondary.dark' },
                        '&.Mui-disabled': { opacity: 0.5 }
                    }}
                >
                    <Map size={20} />
                </IconButton>
            </span>
        </Tooltip>

        <Tooltip title="Send Message">
            <span>
                <IconButton 
                color="primary" 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    borderRadius: 2,
                    '&:hover': { bgcolor: 'primary.dark' },
                    '&.Mui-disabled': { bgcolor: 'rgba(59, 130, 246, 0.3)', color: 'rgba(255,255,255,0.3)' }
                }}
                >
                <Send size={20} />
                </IconButton>
            </span>
        </Tooltip>
      </Box>
    </Box>
  );
}

