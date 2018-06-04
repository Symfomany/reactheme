import React, { Component } from "react";

const withVille = WrapComponant => {
  return class extends React.Component {
    render() {
      return (
        <WrapComponant {...this.props} id={this.props.id} className="anthony" />
      );
    }
  };
};

export default withVille;
