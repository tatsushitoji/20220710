import { createClient, Provider } from "urql";

// TODO:
const client = createClient({
  url: process.env.API_ENDPOINT
    ? `${process.env.API_ENDPOINT}/graphql`
    : "/graphql",
  fetchOptions: {
    headers: {
      authorization: process.env.GH_PERSONAL_ACCESS_TOKEN
        ? `Bearer ${process.env.GH_PERSONAL_ACCESS_TOKEN}`
        : "",
    },
  },
  // FIXME: イマイマはstorybookでstoryごとにcacheなしの状態で確認したいため
  requestPolicy: "network-only",
  suspense: true,
});

export const UrqlProvider: React.FC = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);
