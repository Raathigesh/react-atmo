import BaseElement from "./BaseElement";
import ServerElement from "./ServerElement";
import RouteElement from "./EndpointElement";
import ResponseElement from "./ResponseElement";
import HeadersElement from "./HeadersElement";
import HeaderElement from "./HeaderElement";
import DelayElement from "./DelayElement";
import JsonContentTypeHeader from "./headers/JsonContentTypeHeader";
import XmlContentTypeHeader from "./headers/XmlContentTypeHeader";
import TextContentTypeHeader from "./headers/TextContentTypeHeader";
import CrossOriginHeader from "./headers/CrossOriginHeader";

export { BaseElement, ServerElement, RouteElement };

export function createExpressInstance(type, props, container, context) {
  switch (type) {
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

    case "jsonContentType": {
      return new JsonContentTypeHeader(props, container);
    }

    case "xmlContentType": {
      return new XmlContentTypeHeader(props, container);
    }

    case "textContentType": {
      return new TextContentTypeHeader(props, container);
    }

    case "crossOrigin": {
      return new CrossOriginHeader(props, container);
    }
  }
}
