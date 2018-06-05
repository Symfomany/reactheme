import React, { Component } from "react";
import { SimpleButton, OutlineButton, FloatButton } from "../styled/Button";

import Icon from "./Icon";
import Card from "./Card";
import { Container } from "../styled/Container";
import { Flex, Box } from "grid-styled";

class App extends Component {
  render() {
    return (
      <Container>
        <SimpleButton> Cliquez ici! </SimpleButton>
        <OutlineButton> Cliquez aussi ici! </OutlineButton>
        <FloatButton>
          <Icon icon="face" />
        </FloatButton>
        <Flex>
          <Box width={1 / 2} px={2}>
            <Card />
          </Box>
          <Box width={1 / 2} px={2}>
            <Card />
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default App;
