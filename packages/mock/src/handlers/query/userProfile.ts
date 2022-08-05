import { mockHandler } from '@packages/graphql-codegen'

export const mockUserProfile = mockHandler.mockUserProfileQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      viewer: {
        avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
        login: 'Remy Sharp',
        resourcePath: 'rreemmyy',
      },
    })
  )
)

export const mockUserProfileError = mockHandler.mockUserProfileQuery(
  (_, res, ctx) =>
    res(
      ctx.delay(300),
      ctx.errors([
        {
          message: 'Failed to log in: username or password are invalid',
        },
      ])
    )
)
