import chalk from "chalk";
import express from "express";
import BaseElement from "./BaseElement";
import EndpointElement from "./EndpointElement";
import MiddlewaresElement from "./MiddlewaresElement";

export default class ServerElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.expressApp = express();
    this.server = null;
    this.middlewares = null;
    this.endpoints = [];
  }

  getSupportedProps() {
    return {
      port: true
    };
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  appendChildBeforeMount(child) {
    if (child instanceof EndpointElement) {
      this.endpoints.push(child);
    } else if (child instanceof MiddlewaresElement) {
      this.middlewares = child;
    }
  }

  removeChild(child) {
    if (child instanceof EndpointElement) {
      this.endpoints = this.endpoints.filter(endpoint => endpoint !== child);
    } else if (child instanceof MiddlewaresElement) {
      this.middlewares = null;
    }
  }

  commitMount(newProps) {
    this.restartServer(newProps);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.restartServer(newProps);
  }

  restartServer(props) {
    // try closing the previous server instance
    if (this.server) {
      this.server.close();
    }

    // create a new app. This feels hacky though!
    this.expressApp = express();

    // register the middlewares
    for (let middleware of this.middlewares.items) {
      middleware.callback(this.expressApp);
    }

    this.endpoints.forEach(endpoint => {
      this.expressApp[endpoint.method](endpoint.url, (req, res) => {
        for (const header of endpoint.headers.items) {
          res.set(header.name, header.value);
        }

        const response = endpoint.response.responseCallBack(req, res);

        if (this.delay !== null) {
          setTimeout(() => {
            res.send(response);
          }, this.delay);
        } else {
          res.send(response);
        }
      });
    }, this);

    this.server = this.expressApp.listen(Number(props.port), () => {
      console.log(
        chalk.blue(
          "Server started on ",
          chalk.underline.bgBlue(
            chalk.whiteBright(` http://localhost:${props.port} `)
          )
        )
      );
    });
  }
}
