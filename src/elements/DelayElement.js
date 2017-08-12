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

  finalizeBeforeMount(type, props) {
    this.time = props.time;
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
