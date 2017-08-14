import chalk from "chalk";
import express from "express";
import BaseElement from "./BaseElement";
import EndpointElement from "./EndpointElement";

export default class ServerElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);

    this.rootContainer = rootContainer;
    this.expressApp = express();
    this.server = null;
    this.endpoints = [];
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  appendChildBeforeMount(child) {
    if (child instanceof EndpointElement) {
      this.endpoints.push(child);
    }
  }

  commitMount(newProps) {
    this.restartServer(newProps);
  }

  prepareUpdate() {
    return {};
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.restartServer(newProps);
  }

  restartServer(props) {
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

    // try closing the previous server instance
    if (this.server) {
      this.server.close();
    }

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
