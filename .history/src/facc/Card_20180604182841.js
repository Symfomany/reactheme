import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Card>
                <CardTitle title="">
            <CardMedia src="">
                <CardContent>{this.props.children}</CardContent>

            </Card>
  }
}

export default Card;
