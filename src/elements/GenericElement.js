import BaseElement from "./BaseElement";

export default class GenericElement extends BaseElement {
  constructor(type, props, rootContainer) {
    super(props, rootContainer);
    this._type = type;
    this.props = props;
  }
}
