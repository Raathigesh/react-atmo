import { ServerElement } from "./elements";

export default class AtmoContainer {
  constructor() {
    this.appElement = null;
    this.specs = {};
  }

  appendChild(child) {
    if (child instanceof ServerElement) {
      this.appElement = child;
    }
  }

  removeChild(child) {
    if (child instanceof typeof ServerElement) {
      this.appElement = null;
    }
  }
}
