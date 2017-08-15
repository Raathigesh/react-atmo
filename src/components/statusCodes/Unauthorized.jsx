import React, { Component } from "react";

export default class Unauthorized extends Component {
  render() {
    return <status code={401} />;
  }
}
