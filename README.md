# Managing local state with Apollo Client

- Explain App skeleton. Pretend it connects to a remote GraphQL server, which is why we already have Apollo Client setup

- Add default state

- Install deps (graphql-tag?, apollo-link, apollo-link-state)

## Steps

((show App.js))

I've got a basic React app that has a few nested components. It has access to an Apollo client via the ApolloProvider component. We want to control the text color of the header with these radio buttons. We can manage this state using Apollo.

((switch to client.js))
