import { api } from "graphql-codegen";
import { User } from "../types";

export const useUserProfile = () => {
  const [{ data, fetching }] = api.useUserProfileQuery();
  const user: User = {
    avatarUrl: data?.viewer.avatarUrl as string,
    name: data?.viewer.login || "",
    resourcePath: data?.viewer.resourcePath as string,
  };
  return {
    userData: user,
    loading: fetching,
  };
};
