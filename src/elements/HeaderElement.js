import BaseElement from "./BaseElement";

export default class HeaderElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.name = "";
    this.value = "";
  }

  commitMount(newProps) {
    this.name = newProps.name;
    this.value = newProps.value;
    return true;
  }
}
