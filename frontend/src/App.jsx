import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ChatComponent  from './features/chat';
import RoadmapComponent from './features/roadmap';
import { theme } from './shared/theme';
import MainLayout from './shared/components/MainLayout';

function App() {
  const [hasPlan, setHasPlan] = useState(false); // Default to false for MVP start
  const [isLoading, setIsLoading] = useState(false);

  const handleChatStart = () => {
    if (!hasPlan) {
      setHasPlan(true);
    }
  };

  const togglePlan = () => setHasPlan(!hasPlan);
  const toggleLoading = () => setIsLoading(!isLoading);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout 
        hasPlan={hasPlan}
        chatSlot={<ChatComponent onChatStart={handleChatStart} isLoading={isLoading} />}
        roadmapSlot={<RoadmapComponent isLoading={isLoading} />}
        debugToggle={
           <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 20 }}>
              <button onClick={togglePlan} style={{ opacity: 0.5 }}>Toggle Mode (Debug)</button>
              <button onClick={toggleLoading} style={{ opacity: 0.5 }}>Toggle Loading (Debug)</button>
           </div>
        }
      />
    </ThemeProvider>
  );
}

export default App;
