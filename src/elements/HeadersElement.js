import BaseElement from "./BaseElement";
import HeaderElement from "./HeaderElement";

export default class HeadersElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.items = [];
  }

  appendChildBeforeMount(child) {
    if (child instanceof HeaderElement) {
      this.items.push(child);
    }
  }

  removeChild(child) {
    this.items = this.items.filter(item => item !== child);
  }

  commitUpdate() {}
}
