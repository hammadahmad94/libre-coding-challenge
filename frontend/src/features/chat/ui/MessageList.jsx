import { useRef, useEffect } from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';


export default function MessageList({ messages, isTyping }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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
            <Avatar 
                sx={{ 
                    bgcolor: 'transparent', 
                    color: 'primary.main',
                    width: 32, 
                    height: 32,
                    border: '1px solid',
                    borderColor: 'divider'
                }}
            >
              <Bot size={20} />
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
              border: msg.sender === 'ai' ? 1 : 'none',
              borderColor: 'divider',
              '& p': { m: 0, lineHeight: 1.6 },
              '& ul, & ol': { mt: 1, mb: 1, pl: 2 },
              '& li': { mb: 0.5 }
            }}
          >
            <ReactMarkdown>
              {msg.text}
            </ReactMarkdown>
          </Paper>

          {msg.sender === 'user' && (
            <Avatar sx={{ bgcolor: 'grey.700', width: 32, height: 32 }}>
              <User size={18} />
            </Avatar>
          )}
        </Box>
      ))}
      
      {isTyping && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1.5 }}>
            <Avatar 
                sx={{ 
                    bgcolor: 'transparent', 
                    color: 'primary.main',
                    width: 32, 
                    height: 32,
                    border: '1px solid',
                    borderColor: 'divider'
                }}
            >
              <Bot size={20} />
            </Avatar>
            <Paper 
                elevation={0}
                sx={{ 
                  p: 2, 
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  border: 1,
                  borderColor: 'divider',
                  display: 'flex',
                  alignItems: 'center'
                }}
            >
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    Thinking...
                </Typography>
            </Paper>
        </Box>
      )}
      
      <div ref={messagesEndRef} />
    </Box>
  );
}

