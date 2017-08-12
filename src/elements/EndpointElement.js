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
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount(newProps) {
    this.rootContainer.app[newProps.method](newProps.url, (req, res) => {
      for (const i in this.headers.items) {
        const header = this.headers.items[i];
        res.set(header.name, header.value);
      }

      const response = this.response.responseCallBack(req, res);

      if (this.delay !== null) {
        setTimeout(() => {
          res.send(response);
        }, this.delay);
      } else {
        res.send(response);
      }
    });
    return true;
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
}
