import { Box, Container, Grid } from '@mui/material';


export default function MainLayout({ hasPlan, chatSlot, roadmapSlot, debugToggle }) {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Main Workspace */}
      <Container maxWidth={hasPlan ? false : 'md'} sx={{ flexGrow: 1, py: 4, transition: 'all 0.5s ease-in-out' }}>
        
        {hasPlan ? (
          /* SPLIT VIEW */
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12} md={4} sx={{ height: '100%' }}>
              {chatSlot}
            </Grid>
            <Grid item xs={12} md={8} sx={{ height: '100%' }}>
              {roadmapSlot}
            </Grid>
          </Grid>
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


