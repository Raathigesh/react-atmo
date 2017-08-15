import { AtmoFiber, AtmoRenderer } from "./AtmoFiber";
import CrossOriginHeader from "./components/headers/CrossOriginHeader";
import JsonContentTypeHeader from "./components/headers/JsonContentTypeHeader";
import TextContentTypeHeader from "./components/headers/TextContentTypeHeader";
import XmlContentTypeHeader from "./components/headers/XmlContentTypeHeader";

export { AtmoRenderer };
export const Headers = {
  CrossOriginHeader,
  JsonContentTypeHeader,
  TextContentTypeHeader,
  XmlContentTypeHeader
};
export default AtmoFiber;
