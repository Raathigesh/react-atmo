import React, { Component } from "react";

export default class InternalServerError extends Component {
  render() {
    return <status code={500} />;
  }
}
