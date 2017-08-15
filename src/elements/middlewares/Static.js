const express = require("express");
import BaseElement from "../BaseElement";

export default class Static extends BaseElement {
  constructor(props, rootContainer) {
    super(props, rootContainer);
    this.callback = null;
  }

  getSupportedProps() {
    return {
      path: true
    };
  }

  commitMount(newProps) {
    this.callback = app => {
      app.use(express.static(newProps.path));
    };
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.callback = app => {
      app.use(express.static(newProps.path));
    };
  }
}
