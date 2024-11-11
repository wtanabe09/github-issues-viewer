import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";

const httpLInk = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  }
});


export const client = new ApolloClient({
  link: httpLInk,
  cache: new InMemoryCache(),
});