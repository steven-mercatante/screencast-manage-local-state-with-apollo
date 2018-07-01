import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./client";

const Header = () => <header>I am the header</header>;

const ControlPanel = ({ children }) => <div>{children}</div>;

const TextControls = () => <div>text controls</div>;

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Header />
      <ControlPanel>
        <TextControls />
      </ControlPanel>
    </div>
  </ApolloProvider>
);

export default App;
