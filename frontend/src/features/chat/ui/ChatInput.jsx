import { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { Send } from 'lucide-react';


export default function ChatInput({ onSend }) {
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

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          placeholder="Type your goal..."
          variant="outlined"
          size="small"
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
        <IconButton 
          color="primary" 
          onClick={handleSend}
          disabled={!input.trim()}
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
      </Box>
    </Box>
  );
}

