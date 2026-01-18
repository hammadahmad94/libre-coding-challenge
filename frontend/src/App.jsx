import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ChatComponent  from './features/chat';
import RoadmapComponent from './features/roadmap';
import { theme } from './shared/theme';
import MainLayout from './shared/components/MainLayout';

function App() {
  const [hasPlan, setHasPlan] = useState(false); // Default to false for MVP start
  const [isLoading, setIsLoading] = useState(false);
  const [roadmapData, setRoadmapData] = useState(null);

  const handleChatStart = () => {
    if (!hasPlan) {
      setHasPlan(true);
    }
  };

  const handleRoadmapGenerated = (data) => {
    setRoadmapData(data);
    if (!hasPlan) {
        setHasPlan(true);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout 
        hasPlan={hasPlan}
        chatSlot={
          <ChatComponent 
            onChatStart={handleChatStart} 
            isLoading={isLoading} 
            onRoadmapGenerated={handleRoadmapGenerated}
          />
        }
        roadmapSlot={
          <RoadmapComponent 
            isLoading={isLoading} 
            data={roadmapData}
          />
        }
      />
    </ThemeProvider>
  );
}

export default App;
