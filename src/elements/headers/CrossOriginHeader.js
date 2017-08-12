import HeaderElement from "../HeaderElement";

export default class CrossOrigin extends HeaderElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount() {
    this.name = "Access-Control-Allow-Origin";
    this.value = "*";
    return true;
  }
}
