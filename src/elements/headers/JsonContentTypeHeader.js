import HeaderElement from "../HeaderElement";

export default class JsonContentType extends HeaderElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    this.name = "content-type";
    this.value = "application/json";
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
