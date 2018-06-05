import React, { Component } from "react";

import {} from "../facc/Card";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardTitle>{this.props.children("title")}</CardTitle>
        <CardMedia src="" />
        <CardContent>{this.props.children("content")}</CardContent>
      </Card>
    );
  }
}

export default Card;
