import BaseElement from "./BaseElement";
import BodyParser from "./middlewares/BodyParser";
import Static from "./middlewares/Static";
import Generic from "./middlewares/Generic";

export default class MiddlewaresElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.items = [];
  }

  removeChild(child) {
    this.callback = null;
  }

  commitMount(newProps) {}

  commitUpdate(newProps) {}

  appendChildBeforeMount(child) {
    if (child instanceof BodyParser) {
      this.items.push(child);
    } else if (child instanceof Static) {
      this.items.push(child);
    } else if (child instanceof Generic) {
      this.items.push(child);
    }
  }

  removeChild(child) {
    this.items = this.items.filter(middleware => middleware !== child);
  }
}
