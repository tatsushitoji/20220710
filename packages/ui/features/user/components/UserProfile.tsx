import { Avatar, Card, CardHeader } from "@mui/material";
import { Suspense } from "react";
import { useUserProfile } from "../hooks/useUserProfile";

export const UserProfileContent = () => {
  const {
    userData: { avatarUrl, name, resourcePath },
  } = useUserProfile();
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardHeader
        avatar={<Avatar alt={name} src={avatarUrl} />}
        title={name}
        subheader={resourcePath}
      />
    </Card>
  );
};

export const UserProfile = () => (
  <Suspense fallback={<>loading</>}>
    <UserProfileContent />
  </Suspense>
);
