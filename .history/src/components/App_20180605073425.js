import React, { Component } from "react";
import { SimpleButton, OutlineButton, FloatButton } from "../styled/Button";

import Icon from "./Icon";
import Card from "./Card";
import { Container } from "../styled/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <SimpleButton> Cliquez ici! </SimpleButton>
        <OutlineButton> Cliquez aussi ici! </OutlineButton>
        <FloatButton>
          <Icon icon="face" />
        </FloatButton>
        <Card />
      </Container>
    );
  }
}

export default App;
