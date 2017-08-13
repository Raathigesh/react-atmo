import ReactFiberReconciler from "react-dom/lib/ReactFiberReconciler";
import * as AtmoHostConfig from "./AtmoHostConfig";
import AtmoContainer from "./AtmoContainer";

export const AtmoRenderer = ReactFiberReconciler(AtmoHostConfig);

export const AtmoFiber = {
  listen(element, callback) {
    this.container = new AtmoContainer();
    this.root = AtmoRenderer.createContainer(this.container);
    AtmoRenderer.updateContainer(element, this.root, null, callback);
  }
};
