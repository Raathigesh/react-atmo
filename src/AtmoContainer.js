import { ServerElement, BaseElement } from "./elements";

export default class AtmoContainer {
  constructor(expressApp) {
    this.app = expressApp;
    this.appElement = null;
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
