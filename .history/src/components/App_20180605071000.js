import React, { Component } from "react";
import { SimpleButton, OutlineButton, FloatButton } from "../styled/Button";
import { Card, CardTitle, CardContent } from "../styled/Card";

import Icon from "./Icon";

class App extends Component {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <SimpleButton> Cliquez ici! </SimpleButton>
        <OutlineButton> Cliquez aussi ici! </OutlineButton>
        <FloatButton>
          <Icon icon="face" />
        </FloatButton>
      </div>
    );
  }
}

export default App;
