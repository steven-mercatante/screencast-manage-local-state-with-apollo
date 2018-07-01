import { ApolloProvider } from "react-apollo";
import { RadioGroup, Radio } from "react-radio-group";
import client from "./client";
import React, { Component } from "react";

const Header = () => (
  <header>
    <h2>I'm a title</h2>
  </header>
);

const ControlPanel = ({ children }) => <div>{children}</div>;

class TextControls extends Component {
  setTextColor = color => {
    // TODO: implement
  };

  render() {
    return (
      <div>
        <p>Set text color:</p>
        <RadioGroup
          name="textColor"
          onChange={color => this.setTextColor(color)}
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
    );
  }
}

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
