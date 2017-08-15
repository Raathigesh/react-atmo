import BaseElement from "./BaseElement";

export default class HeaderElement extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.rootContainer = rootContainer;
    this.name = "";
    this.value = "";
  }

  getSupportedProps() {
    return {
      name: true,
      value: true
    };
  }

  commitMount(newProps) {
    this.name = newProps.name;
    this.value = newProps.value;
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.name = newProps.name;
    this.value = newProps.value;
  }
}
