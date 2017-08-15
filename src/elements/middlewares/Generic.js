import BaseElement from "../BaseElement";
const bodyParser = require("body-parser");

export default class BodyParser extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.callback = null;
  }

  removeChild(child) {
    this.callback = null;
  }

  commitMount(newProps) {
    this.callback = newProps.children;
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.callback = newProps.children;
  }
}
