import { createClient, Provider } from "urql";

// TODO:
const client = createClient({
  url: process.env.API_ENDPOINT
    ? `${process.env.API_ENDPOINT}/graphql`
    : "/graphql",
  fetchOptions: {
    headers: {
      authorization: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        ? `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
        : "",
    },
  },
  suspense: true,
});

export const UrqlProvider: React.FC = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);
