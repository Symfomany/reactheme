import React, { Component } from "react";
import withVille from "../hoc/withVille";
class Home extends Component {
  render() {
    const { ville, id } = this.props;
    return (
      <p>
        {ville} de {id}
      </p>
    );
  }
}

export default withVille(Home);
