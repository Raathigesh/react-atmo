import BaseElement from "./BaseElement";

export default class HeaderElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.name = "";
    this.value = "";
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    this.name = props.name;
    this.value = props.value;
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
