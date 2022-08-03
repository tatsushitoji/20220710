declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_ENDPOINT?: string;
    readonly GH_PERSONAL_ACCESS_TOKEN?: string;
  }
}
