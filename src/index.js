import { AtmoFiber, AtmoRenderer } from "./AtmoFiber";

import CrossOriginHeader from "./components/headers/CrossOriginHeader";
import JsonContentTypeHeader from "./components/headers/JsonContentTypeHeader";
import TextContentTypeHeader from "./components/headers/TextContentTypeHeader";
import XmlContentTypeHeader from "./components/headers/XmlContentTypeHeader";

import BadRequest from "./components/statusCodes/BadRequest";
import Forbidden from "./components/statusCodes/Forbidden";
import InternalServerError from "./components/statusCodes/InternalServerError";
import NotFound from "./components/statusCodes/NotFound";
import Ok from "./components/statusCodes/Ok";
import Unauthorized from "./components/statusCodes/Unauthorized";

export { AtmoRenderer };
export const Headers = {
  CrossOriginHeader,
  JsonContentTypeHeader,
  TextContentTypeHeader,
  XmlContentTypeHeader
};
export const Status = {
  BadRequest,
  Forbidden,
  InternalServerError,
  NotFound,
  Ok,
  Unauthorized
};
export default AtmoFiber;
