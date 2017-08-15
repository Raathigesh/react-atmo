import React, { Component } from "react";
import Atmo, { Headers } from "../src";

Atmo.listen(
  <server port="9001">
    <route method="get" url="/unicorns">
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
      <delay time={3000} />
    </route>
  </server>
);
