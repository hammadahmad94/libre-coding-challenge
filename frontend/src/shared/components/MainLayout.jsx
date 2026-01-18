import { Box, Container, Grid } from '@mui/material';


export default function MainLayout({ hasPlan, chatSlot, roadmapSlot, debugToggle }) {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Main Workspace */}
      <Container 
        maxWidth={hasPlan ? false : 'md'} 
        sx={{ 
          flexGrow: 1, 
          py: 2, 
          transition: 'all 0.5s ease-in-out',
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          overflow: 'hidden' 
        }}
      >
        
        {hasPlan ? (
          /* SPLIT VIEW */
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, minHeight: 0 }}>
            <Box sx={{ width: '30%', height: '100%' }}>
              {chatSlot}
            </Box>
            <Box sx={{ width: '70%', height: '100%' }}>
              {roadmapSlot}
            </Box>
          </Box>
        ) : (
           /* CENTERED VIEW */
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Box sx={{ width: '100%', maxWidth: 600, height: '80%' }}>
                {chatSlot}
                {debugToggle}
             </Box>
          </Box>
        )}

      </Container>
    </Box>
  );
}


