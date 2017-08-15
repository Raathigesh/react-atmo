import React, { Component } from "react";

export default class CrossOriginHeader extends Component {
  render() {
    return <header name="Access-Control-Allow-Origin" value="*" />;
  }
}
