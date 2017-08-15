import BaseElement from "./BaseElement";

export default class StatusCode extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.code = 0;
  }

  getSupportedProps() {
    return {
      code: true
    };
  }

  commitMount(newProps) {
    this.code = newProps.code;
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.code = newProps.code;
  }
}
