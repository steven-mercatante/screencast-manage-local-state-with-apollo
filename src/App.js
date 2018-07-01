import { ApolloProvider } from "react-apollo";
import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import client from "./client";

import { Query } from "react-apollo";
import { GET_TEXT_COLOR } from "./client";
import gql from "graphql-tag";

const Header = () => (
  <header>
    <Query query={GET_TEXT_COLOR}>
      {({ data }) => {
        return <h2 className={data.textColor}>I am the header</h2>;
      }}
    </Query>
  </header>
);

const ControlPanel = ({ children }) => <div>{children}</div>;

const setTextColor = color =>
  client.mutate({
    mutation: gql`
      mutation SetTextColor($color: String!) {
        setTextColor(color: $color) @client {
          textColor
        }
      }
    `,
    variables: { color }
  });

const TextControls = () => (
  <Query query={GET_TEXT_COLOR}>
    {({ data }) => (
      <div>
        <p>Set text color:</p>
        <RadioGroup
          name="textColor"
          onChange={color => setTextColor(color)}
          selectedValue={data.textColor}
        >
          <Radio value="yellow" id="yellow" />
          <label htmlFor="yellow" className="yellow">
            yellow
          </label>

          <Radio value="green" id="green" />
          <label htmlFor="green" className="green">
            green
          </label>

          <Radio value="orange" id="orange" />
          <label htmlFor="orange" className="orange">
            orange
          </label>
        </RadioGroup>
      </div>
    )}
  </Query>
);

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
