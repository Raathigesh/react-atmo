const SUPPORTED_PROPS = {};

export default class BaseElement {
  constructor(props, rootContainer) {}

  appendChildBeforeMount(child) {}

  finalizeBeforeMount(type, props, rootContainerInstance) {
    return false;
  }

  finalizeBeforeRemoval() {}

  commitMount(newProps) {}

  // TODO: There's probably a better way
  getPublicInstance() {
    return this;
  }

  getSupportedProps() {
    return SUPPORTED_PROPS;
  }

  prepareUpdate(oldProps, newProps, rootContainerInstance) {
    const updatePayload = [];

    const mergedProps = {};
    for (const propKey in oldProps) {
      mergedProps[propKey] = [oldProps[propKey], null];
    }
    for (const propKey in newProps) {
      if (mergedProps[propKey] !== undefined) {
        mergedProps[propKey][1] = newProps[propKey];
      } else {
        mergedProps[propKey] = [null, newProps[propKey]];
      }
    }

    const supportedProps = this.getSupportedProps();

    for (const propKey in mergedProps) {
      if (!supportedProps[propKey]) {
        continue;
      }
      const [oldVal, newVal] = mergedProps[propKey];
      if (oldVal !== newVal) {
        updatePayload.push(propKey, newVal);
      }
    }

    if (updatePayload.length === 0) {
      return null;
    } else {
      return updatePayload;
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {}

  appendChild(child) {}

  insertBefore(child) {}

  removeChild(child) {}
}
