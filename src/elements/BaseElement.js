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
}
