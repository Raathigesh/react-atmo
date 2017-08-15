export default class BaseElement {
  constructor(props, rootContainer) {}

  appendChildBeforeMount(child) {}

  finalizeBeforeMount(type, props, rootContainerInstance) {
    return true;
  }

  finalizeBeforeRemoval() {}

  commitMount(newProps) {}

  getPublicInstance() {
    return this;
  }

  getSupportedProps() {
    return {};
  }

  prepareUpdate(oldProps, newProps, rootContainerInstance) {
    return {};
  }
}
