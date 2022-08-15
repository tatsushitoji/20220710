import { Avatar, Card, CardHeader } from '@mui/material'
import { useUserProfile } from '../../hooks/useUserProfile'
import { Error } from './Error'
import { Skeleton } from './Skeleton'

export const UserProfile = () => {
  const { user, fetching, error } = useUserProfile()

  return (
    <Card sx={{ maxWidth: 240 }}>
      {error && <Error />}
      {fetching && <Skeleton />}
      {user && (
        <CardHeader
          avatar={<Avatar alt={user?.name} src={user?.avatarUrl} />}
          title={user?.name}
          subheader={user?.resourcePath}
        />
      )}
    </Card>
  )
}
