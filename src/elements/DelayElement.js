import BaseElement from "./BaseElement";

export default class DelayElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.time = 0;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount(newProps) {
    this.time = newProps.time;
    return true;
  }
}
