import { AtmoFiber, AtmoRenderer } from "./AtmoFiber";
import CrossOriginHeader from "./components/CrossOriginHeader";
import JsonContentTypeHeader from "./components/JsonContentTypeHeader";
import TextContentTypeHeader from "./components/TextContentTypeHeader";
import XmlContentTypeHeader from "./components/XmlContentTypeHeader";

export { AtmoRenderer };
export const Headers = {
  CrossOriginHeader,
  JsonContentTypeHeader,
  TextContentTypeHeader,
  XmlContentTypeHeader
};
export default AtmoFiber;
