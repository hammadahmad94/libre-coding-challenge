import { Stack, Paper, Skeleton } from '@mui/material';

export default function RoadmapSkeleton() {
  return (
    <Stack spacing={2}>
        {[1, 2, 3].map((item) => (
            <Paper key={item} sx={{ p: 2, borderRadius: 2 }} elevation={1}>
                <Skeleton variant="text" width="40%" height={30} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="rectangular" width={80} height={24} sx={{ mt: 2, borderRadius: 1 }} />
            </Paper>
        ))}
    </Stack>
  );
}
