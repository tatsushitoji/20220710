import { mockHandler } from "graphql-codegen";

export const mockUserProfile = mockHandler.mockUserProfileQuery(
  (_, res, ctx) => {
    return res(
      ctx.delay(300),
      ctx.data({
        viewer: {
          avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
          login: "Remy Sharp",
          resourcePath: "rreemmyy",
        },
      })
    );
  }
);
