import { Avatar, Card, CardHeader, Skeleton } from "@mui/material";
import { Suspense } from "react";
import { useUserProfile } from "../hooks/useUserProfile";

const UserProfileContent = () => {
  const { user } = useUserProfile();
  if (!user) {
    return <CardHeader title="ユーザー情報の取得に失敗しました" />;
  }
  const { avatarUrl, name, resourcePath } = user;
  return (
    <CardHeader
      avatar={<Avatar alt={name} src={avatarUrl} />}
      title={name}
      subheader={resourcePath}
    />
  );
};

const UserProfileSkeleton = () => (
  <CardHeader
    avatar={
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    }
    title={
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />
    }
    subheader={
      <Skeleton
        animation="wave"
        height={8}
        width="72%"
        style={{ marginBottom: 6 }}
      />
    }
  />
);

export const UserProfile = () => (
  <Card sx={{ maxWidth: 240 }}>
    <Suspense fallback={<UserProfileSkeleton />}>
      <UserProfileContent />
    </Suspense>
  </Card>
);
