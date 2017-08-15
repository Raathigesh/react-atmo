import BaseElement from "./BaseElement";

export default class ResponseElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.responseCallBack = null;
  }

  getPublicInstance() {
    return this.rootContainer.app;
  }

  commitMount(newProps) {
    this.responseCallBack = newProps.children;
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.responseCallBack = newProps.children;
  }
}
