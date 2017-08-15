import BaseElement from "./BaseElement";

export default class DelayElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.time = 0;
  }

  getSupportedProps() {
    return {
      time: true
    };
  }

  commitMount(newProps) {
    this.time = newProps.time;
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.time = newProps.time;
  }
}
