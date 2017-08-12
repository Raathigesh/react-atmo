import HeaderElement from "../HeaderElement";

export default class XmlContentType extends HeaderElement {
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
    this.value = "text/xml";
    return true;
  }

  commitMount(newProps) {}

  finalizeBeforeRemoval() {}
}
