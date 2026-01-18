import { useState } from 'react';
import { Paper, Box, Button } from '@mui/material';
import ChatHeader from './ui/ChatHeader';
import MessageList from './ui/MessageList';
import ChatInput from './ui/ChatInput';
import { sendMessage, generateRoadmap } from './api';

export default function ChatComponent({ 
    onChatStart, 
    onRoadmapGenerated, 
    onPlanGenerationStart,
    onPlanGenerationEnd,
    isLoading: externalLoading = false 
}) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Pathway. What big goal do you want to tackle today?", sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  const isLoading = externalLoading || isGeneratingPlan;

  const handleSend = async (inputText) => {
    if (onChatStart) {
      onChatStart();
    }
    
    const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
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
        setIsTyping(false);
    }
  };

  const handleGeneratePlan = async () => {
      setIsGeneratingPlan(true);
      if (onPlanGenerationStart) onPlanGenerationStart();

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
          setIsGeneratingPlan(false);
          if (onPlanGenerationEnd) onPlanGenerationEnd();
      }
  };

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 3, elevation: 3 }}>
      <ChatHeader />
      <MessageList messages={messages} isTyping={isTyping} />
      
      <ChatInput 
        onSend={handleSend} 
        onGeneratePlan={handleGeneratePlan}
        isLoading={isLoading}
        canGenerate={messages.some(m => m.sender === 'user')}
      />
    </Paper>
  );
}
