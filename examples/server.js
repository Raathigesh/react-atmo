import React from "react";
import Atmo from "../src";

Atmo.listen(
  <server port="9000">
    <route method="get" url="/user/capability">
      <response>
        {() => ({
          user: "Adlee",
          isAdmin: false
        })}
      </response>
      <headers>
        <header name="content-type" value="application/json" />
        <jsonContentType />
        <crossOrigin />
      </headers>
    </route>
  </server>
);
