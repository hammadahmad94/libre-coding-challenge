import { useState } from 'react';
import { Paper, Box, Button } from '@mui/material';
import ChatHeader from './ui/ChatHeader';
import MessageList from './ui/MessageList';
import ChatInput from './ui/ChatInput';
import ChatSkeleton from './ui/ChatSkeleton';
import { sendMessage, generateRoadmap } from './api';

export default function ChatComponent({ onChatStart, onRoadmapGenerated, isLoading: externalLoading = false }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Pathway. What big goal do you want to tackle today?", sender: 'ai' }
  ]);
  const [internalLoading, setInternalLoading] = useState(false);

  const isLoading = externalLoading || internalLoading;

  const handleSend = async (inputText) => {
    if (onChatStart) {
      onChatStart();
    }
    
    const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInternalLoading(true);

    try {
        // Prepare history for API
        const history = [...messages, userMessage].map(m => ({
            role: m.sender === 'ai' ? 'assistant' : 'user',
            content: m.text
        }));

        const data = await sendMessage(history);
        const aiText = data.response;

        setMessages(prev => [...prev, { 
            id: Date.now() + 1, 
            text: aiText, 
            sender: 'ai' 
        }]);
    } catch (error) {
        console.error("Failed to send message:", error);
        setMessages(prev => [...prev, { 
            id: Date.now() + 1, 
            text: "Sorry, I encountered an error. Please try again.", 
            sender: 'ai' 
        }]);
    } finally {
        setInternalLoading(false);
    }
  };

  const handleGeneratePlan = async () => {
      setInternalLoading(true);
      try {
        const history = messages.map(m => ({
            role: m.sender === 'ai' ? 'assistant' : 'user',
            content: m.text
        }));
        
        const data = await generateRoadmap(history);
        if (onRoadmapGenerated) {
            onRoadmapGenerated(data);
        }
      } catch (error) {
          console.error("Failed to generate plan:", error);
      } finally {
          setInternalLoading(false);
      }
  };

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, elevation: 3 }}>
      <ChatHeader />
      <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" size="small" onClick={handleGeneratePlan} disabled={isLoading}>
              Generate Plan
          </Button>
      </Box>
      
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        <MessageList messages={messages} />
      )}
      
      <ChatInput onSend={handleSend} />
    </Paper>
  );
}
