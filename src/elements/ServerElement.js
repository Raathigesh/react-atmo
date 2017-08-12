import BaseElement from "./BaseElement";

export default class ServerElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);

    this.rootContainer = rootContainer;
    this.attachedHandlers = {};
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    this.rootContainer.app.listen(Number(props.port), () => {
      console.log("Started...");
    });
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
