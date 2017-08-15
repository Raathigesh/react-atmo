import React, { Component } from "react";
import Atmo, { Headers } from "../src";

class Server extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      showElement: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showElement: false
      });
    }, 6000);
  }

  render() {
    return (
      <server port="9001">
        <middlewares>
          <middleware>
            {app => {
              var x = app;
            }}
          </middleware>
          <static path="./" />
          <bodyparser />
        </middlewares>
        <route method="get" url="/unicorns">
          <response>
            {() => ({
              name: "Adiana",
              description: "The fiery one from server 2"
            })}
          </response>
          <headers>
            <Headers.CrossOriginHeader />
            <Headers.JsonContentTypeHeader />
            <header name="x-powered-by" value="Unicorn JS" />
          </headers>
          <delay time={this.state.showElement ? 100 : 200} />
        </route>
      </server>
    );
  }
}

Atmo.listen(<Server />);
