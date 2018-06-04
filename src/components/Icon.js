import React, { Component } from "react";
import { SimpleButton, OutlineButton, FloatButton } from "../styled/Button";

class Icon extends Component {
  render() {
    return <span className="material-icons">{this.props.icon}</span>;
  }
}

export default Icon;
