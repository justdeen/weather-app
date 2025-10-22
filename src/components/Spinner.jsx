import Skeleton from '@mui/material/Skeleton';
import LinearProgress from '@mui/material/LinearProgress';

export default function Spinner() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <LinearProgress />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} sx={{marginTop: '10px'}} />
    </div>
  );
}