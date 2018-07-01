import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Pretend we've got a GraphQL server running locally...
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache: cache
});

export default client;
