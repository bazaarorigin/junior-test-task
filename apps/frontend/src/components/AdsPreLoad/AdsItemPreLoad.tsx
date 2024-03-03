import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
} from '@mui/material';

const AdsItemPreLoad = () => (
  <Card sx={{ maxWidth: 250 }}>
    <CardMedia>
      <Skeleton variant="rectangular" width={250} height={210} />
    </CardMedia>
    <CardContent>
      <Box sx={{ pt: 0.5 }}>
        <Stack direction="row" gap={2}>
          <Skeleton width={200} />
          <Skeleton width={100} />
        </Stack>
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
      </Box>
    </CardContent>
  </Card>
);

export default AdsItemPreLoad;
