import { ApolloProvider } from "react-apollo";
import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import client from "./client";

const Header = () => (
  <header>
    <h2>I am the header</h2>
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
      <Radio value="red" id="red" />
      <label for="red">Red</label>

      <Radio value="blue" id="blue" />
      <label for="blue">Blue</label>

      <Radio value="green" id="green" />
      <label for="green">Green</label>
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
