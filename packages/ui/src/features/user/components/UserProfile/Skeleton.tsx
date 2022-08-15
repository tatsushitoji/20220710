import { CardHeader, Skeleton as MuiSkeleton } from '@mui/material'

export const Skeleton = () => (
  <CardHeader
    avatar={
      <MuiSkeleton animation="wave" variant="circular" width={40} height={40} />
    }
    title={
      <MuiSkeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />
    }
    subheader={
      <MuiSkeleton
        animation="wave"
        height={8}
        width="72%"
        style={{ marginBottom: 6 }}
      />
    }
  />
)
