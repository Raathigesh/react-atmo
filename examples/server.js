import React from "react";
import Atmo, { Headers } from "../src";

Atmo.listen(
  <servers>
    <server port="9000">
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one"
          })}
        </response>
        <headers>
          <Headers.CrossOriginHeader />
          <Headers.JsonContentTypeHeader />
          <header name="x-powered-by" value="Unicorn JS" />
        </headers>
      </route>
    </server>
    <server port="9001">
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one from server 2"
          })}
        </response>
        <headers>
          <Headers.CrossOriginHeader />
          <Headers.JsonContentTypeHeader />
          <header name="x-powered-by" value="Unicorn JS" />
        </headers>
      </route>
    </server>
  </servers>
);
