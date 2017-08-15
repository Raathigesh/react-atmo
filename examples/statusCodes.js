import React, { Component } from "react";
import Atmo, { Status } from "../src";

Atmo.listen(
  <server port="9001">
    <route method="get" url="/unicorns">
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
      <Status.Ok />
    </route>
  </server>
);
