import { Avatar, Card, CardHeader } from "@mui/material";
import { User } from "../types";

type Props = {
  user: User;
};

export const UserProfile = ({ user }: Props) => (
  <Card sx={{ maxWidth: 240 }}>
    <CardHeader
      avatar={<Avatar alt={user.name} src={user.avatarUrl} />}
      title={user.name}
      subheader={user.resourcePath}
    />
  </Card>
);
