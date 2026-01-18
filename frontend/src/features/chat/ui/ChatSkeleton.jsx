import { Box, Stack, Skeleton } from '@mui/material';

export default function ChatSkeleton() {
  return (
    <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
        <Stack spacing={2}>
            <Box sx={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                    <Skeleton variant="rectangular" width={200} height={60} sx={{ borderRadius: 2 }} />
            </Box>
                <Box sx={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
                    <Skeleton variant="rectangular" width={150} height={40} sx={{ borderRadius: 2 }} />
            </Box>
            <Box sx={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                    <Skeleton variant="rectangular" width={250} height={80} sx={{ borderRadius: 2 }} />
            </Box>
        </Stack>
    </Box>
  );
}
