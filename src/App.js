import { ApolloProvider } from "react-apollo";
import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import client from "./client";

import { Query } from "react-apollo";
import { GET_TEXT_COLOR } from "./client";

const Header = () => (
  <header>
    <Query query={GET_TEXT_COLOR}>
      {({ data }) => {
        console.log(data);
        return <h2 className={data.textColor}>I am the header</h2>;
      }}
    </Query>
  </header>
);

const ControlPanel = ({ children }) => <div>{children}</div>;

const TextControls = () => (
  <div>
    <p>Set text color:</p>
    <RadioGroup
      name="textColor"
      onChange={color => console.log(`Set the color to ${color}`)}
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
