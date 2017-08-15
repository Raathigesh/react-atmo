import React, { Component } from "react";
import Atmo, { Headers } from "../src";

Atmo.listen(
  <server port="9001">
    <middlewares>
      <bodyparser />
    </middlewares>
    <route method="get" url="/unicorns">
      <headers>
        <Headers.CrossOriginHeader />
        <Headers.JsonContentTypeHeader />
      </headers>
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one from server 2"
        })}
      </response>
    </route>
  </server>
);
