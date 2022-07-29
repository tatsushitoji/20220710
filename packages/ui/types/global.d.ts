declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_ENDPOINT?: string;
    readonly GITHUB_PERSONAL_ACCESS_TOKEN?: string;
  }
}
