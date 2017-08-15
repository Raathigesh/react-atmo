import React, { Component } from "react";

export default class BadRequest extends Component {
  render() {
    return <status code={400} />;
  }
}
