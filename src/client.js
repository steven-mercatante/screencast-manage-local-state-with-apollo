import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

// Pretend we've got a GraphQL server running locally...
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql"
});

const cache = new InMemoryCache();

const defaults = {
  textColor: "green"
};

export const GET_TEXT_COLOR = gql`
  {
    textColor @client
  }
`;

const resolvers = {}; // TODO: fill this out

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const client = new ApolloClient({
  // link: httpLink,
  link: ApolloLink.from([stateLink, httpLink]),
  cache
});

export default client;
