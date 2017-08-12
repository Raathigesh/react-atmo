import HeaderElement from "../HeaderElement";

export default class CrossOrigin extends HeaderElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  // Hook up event handlers, if they exist
  finalizeBeforeMount(type, props) {
    this.name = "Access-Control-Allow-Origin";
    this.value = "*";
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
