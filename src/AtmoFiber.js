import ReactFiberReconciler from "react-dom/lib/ReactFiberReconciler";
import express from "express";
import * as AtmoHostConfig from "./AtmoHostConfig";
import AtmoContainer from "./AtmoContainer";

export const AtmoRenderer = ReactFiberReconciler(AtmoHostConfig);

export const AtmoFiber = {
  listen(element, callback) {
    const app = express();
    this.container = new AtmoContainer(app);
    this.root = AtmoRenderer.createContainer(this.container);
    AtmoRenderer.updateContainer(element, this.root, null, callback);
  }
};
