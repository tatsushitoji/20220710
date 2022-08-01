import { api } from "graphql-codegen";
import { User } from "../types";

export const useUserProfile = () => {
  const [{ data }] = api.useUserProfileQuery();
  const user: User | undefined = data
    ? {
        avatarUrl: data?.viewer.avatarUrl,
        name: data?.viewer.login,
        resourcePath: data?.viewer.resourcePath,
      }
    : undefined;
  return {
    user,
  };
};
