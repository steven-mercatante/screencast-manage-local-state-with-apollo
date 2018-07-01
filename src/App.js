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
      <Radio value="yellow" id="yellow" />
      <label for="yellow" className="yellow">
        yellow
      </label>

      <Radio value="green" id="green" />
      <label for="green" className="green">
        green
      </label>

      <Radio value="orange" id="orange" />
      <label for="orange" className="orange">
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
