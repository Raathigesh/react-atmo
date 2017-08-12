import BaseElement from "./BaseElement";
import chalk from "chalk";

export default class ServerElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);

    this.rootContainer = rootContainer;
    this.attachedHandlers = {};
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount(newProps) {
    this.rootContainer.app.listen(Number(newProps.port), () => {
      console.log(
        chalk.blue(
          "Server started on ",
          chalk.underline.bgBlue(
            chalk.whiteBright(` http://localhost:${newProps.port} `)
          )
        )
      );
    });
  }
}
