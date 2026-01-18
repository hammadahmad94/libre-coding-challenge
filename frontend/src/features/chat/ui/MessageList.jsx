import { useRef, useEffect } from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { Bot, User } from 'lucide-react';


export default function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 0 }}>
      {messages.map((msg) => (
        <Box 
          key={msg.id} 
          sx={{ 
            display: 'flex', 
            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            gap: 1.5
          }}
        >
          {msg.sender === 'ai' && (
            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
              <Bot size={18} />
            </Avatar>
          )}
          
          <Paper 
            elevation={0}
            sx={{ 
              p: 2, 
              maxWidth: '80%', 
              borderRadius: 2,
              bgcolor: msg.sender === 'user' ? 'primary.main' : 'background.default',
              color: msg.sender === 'user' ? '#fff' : 'text.primary',
              border: msg.sender === 'ai' ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
          >
            <Typography variant="body1" sx={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
              {msg.text}
            </Typography>
          </Paper>

          {msg.sender === 'user' && (
            <Avatar sx={{ bgcolor: 'grey.700', width: 32, height: 32 }}>
              <User size={18} />
            </Avatar>
          )}
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
}

