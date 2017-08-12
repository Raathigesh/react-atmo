import BaseElement from "./BaseElement";

export default class ResponseElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);

    this.rootContainer = rootContainer;
    this.responseCallBack = null;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    this.responseCallBack = props.children;
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
