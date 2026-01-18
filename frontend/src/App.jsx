import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ChatComponent } from './features/chat';
import { RoadmapComponent } from './features/roadmap';
import { theme } from './shared/theme';
import MainLayout from './shared/components/MainLayout';

function App() {
  const [hasPlan, setHasPlan] = useState(false); // Default to false for MVP start


  const togglePlan = () => setHasPlan(!hasPlan);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout 
        hasPlan={hasPlan}
        chatSlot={<ChatComponent />}
        roadmapSlot={<RoadmapComponent />}
        debugToggle={
           <button onClick={togglePlan} style={{marginTop: 20, opacity: 0.5}}>Toggle Mode (Debug)</button>
        }
      />
    </ThemeProvider>
  );
}

export default App;
