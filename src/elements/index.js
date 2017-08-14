import BaseElement from "./BaseElement";
import ServerElement from "./ServerElement";
import RouteElement from "./EndpointElement";
import ResponseElement from "./ResponseElement";
import HeadersElement from "./HeadersElement";
import HeaderElement from "./HeaderElement";
import DelayElement from "./DelayElement";

export { BaseElement, ServerElement, RouteElement };

export function createExpressInstance(type, props, container, context) {
  switch (type) {
    case "servers": {
      return new BaseElement(props, container, context);
    }

    case "server": {
      return new ServerElement(props, container, context);
    }

    case "route": {
      return new RouteElement(props, container, context);
    }

    case "response": {
      return new ResponseElement(props, container, context);
    }

    case "headers": {
      return new HeadersElement(props, container, context);
    }

    case "header": {
      return new HeaderElement(props, container, context);
    }

    case "delay": {
      return new DelayElement(props, container, context);
    }
  }
}
