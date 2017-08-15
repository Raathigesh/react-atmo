import React, { Component } from "react";
import Atmo, { Headers } from "../src";

Atmo.listen(
  <servers>
    <server port="9001">
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one from server 1"
          })}
        </response>
      </route>
    </server>
    <server port="9002">
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one from server 2"
          })}
        </response>
      </route>
    </server>
  </servers>
);
