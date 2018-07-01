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
        return <h2 className={data.textColor}>I'm a {data.textColor} title</h2>;
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
          <Radio value="blue" id="blue" />
          <label htmlFor="blue" className="blue">
            blue
          </label>

          <Radio value="green" id="green" />
          <label htmlFor="green" className="green">
            green
          </label>

          <Radio value="red" id="red" />
          <label htmlFor="red" className="red">
            red
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
