import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import gql from "graphql-tag";

// Pretend we've got a GraphQL server running locally...
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql"
});

const cache = new InMemoryCache();

const defaults = {
  textColor: {
    value: "red",
    __typename: "TextColor"
  }
};

export const GET_TEXT_COLOR = gql`
  {
    textColor @client {
      value
    }
  }
`;

const resolvers = {
  Mutation: {
    setTextColor: (_, { color }, { cache }) => {
      const newTextColor = { value: color, __typename: "TextColor" };
      const data = { textColor: newTextColor };
      cache.writeData({ data });
      return newTextColor;
    }
  }
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache
});

export default client;
