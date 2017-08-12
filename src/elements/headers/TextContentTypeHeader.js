import HeaderElement from "../HeaderElement";

export default class TextContentType extends HeaderElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount() {
    this.name = "content-type";
    this.value = "text/plain";
    return true;
  }
}
