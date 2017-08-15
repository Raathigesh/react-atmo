import React, { Component } from "react";
import Atmo, { Headers } from "../src";

Atmo.listen(
  <server port="9001">
    <middlewares>
      <static path="./" />
      <bodyparser />
      <middleware>
        {app => {
          // use the app and do whatever you want
        }}
      </middleware>
    </middlewares>
    <route method="get" url="/unicorns">
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
    </route>
  </server>
);
