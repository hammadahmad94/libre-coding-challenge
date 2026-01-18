import { useState } from 'react';
import { Paper } from '@mui/material';
import ChatHeader from './ui/ChatHeader';
import MessageList from './ui/MessageList';
import ChatInput from './ui/ChatInput';
import ChatSkeleton from './ui/ChatSkeleton';

export default function ChatComponent({ onChatStart, isLoading = false }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Pathway. What big goal do you want to tackle today?", sender: 'ai' }
  ]);

  const handleSend = (inputText) => {
    if (onChatStart) {
      onChatStart();
    }
    
    //@todo: will be replaed with backend api call
    const newMessage = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);

    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "That sounds ambitious! Let's break that down. Could you tell me a bit more about your timeline?", 
        sender: 'ai' 
      }]);
    }, 1000);
  };

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, elevation: 3 }}>
      <ChatHeader />
      
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        <MessageList messages={messages} />
      )}
      
      <ChatInput onSend={handleSend} />
    </Paper>
  );
}
