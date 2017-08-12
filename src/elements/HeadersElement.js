import BaseElement from "./BaseElement";
import HeaderElement from "./HeaderElement";

export default class HeadersElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.items = [];
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    return true;
  }

  appendChildBeforeMount(child) {
    if (child instanceof HeaderElement) {
      this.items.push(child);
    }
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
