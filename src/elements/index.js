import BaseElement from "./BaseElement";
import ServerElement from "./ServerElement";
import RouteElement from "./EndpointElement";
import ResponseElement from "./ResponseElement";
import HeadersElement from "./HeadersElement";
import HeaderElement from "./HeaderElement";
import DelayElement from "./DelayElement";
import MiddlewaresElement from "./MiddlewaresElement";
import MiddlewareElement from "./middlewares/Generic";
import StaticMiddleware from "./middlewares/Static";
import BodyParserMiddleware from "./middlewares/BodyParser";
import StatusCode from "./StatusCode";

export { BaseElement, ServerElement, RouteElement };

export function createExpressInstance(type, props, container, context) {
  switch (type) {
    case "servers": {
      return new BaseElement(props, container);
    }

    case "server": {
      return new ServerElement(props, container);
    }

    case "route": {
      return new RouteElement(props, container);
    }

    case "response": {
      return new ResponseElement(props, container);
    }

    case "headers": {
      return new HeadersElement(props, container);
    }

    case "header": {
      return new HeaderElement(props, container);
    }

    case "delay": {
      return new DelayElement(props, container);
    }

    case "middlewares": {
      return new MiddlewaresElement(props, container);
    }

    case "middleware": {
      return new MiddlewareElement(props, container);
    }

    case "bodyparser": {
      return new BodyParserMiddleware(props, container);
    }

    case "static": {
      return new StaticMiddleware(props, container);
    }

    case "status": {
      return new StatusCode(props, container);
    }
  }
}
