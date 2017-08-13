import BaseElement from "./BaseElement";
import HeadersElement from "./HeadersElement";
import ResponseElement from "./ResponseElement";
import DelayElement from "./DelayElement";

export default class RouteElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.headers = null;
    this.response = null;
    this.delay = null;
    this.method = null;
    this.url = null;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  appendChildBeforeMount(child) {
    if (child instanceof HeadersElement) {
      this.headers = child;
    } else if (child instanceof ResponseElement) {
      this.response = child;
    } else if (child instanceof DelayElement) {
      this.delay = child.time;
    }
  }

  commitMount(newProps) {
    this.method = newProps.method;
    this.url = newProps.url;
    return true;
  }
}
