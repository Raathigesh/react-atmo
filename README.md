# React Atmo

React atmo is a custom renderer for [express](https://expressjs.com/). This is an experimental project, supports very minimal features and not suitable for production apps. But it's an awesome fit for creating mock APIs for demos and presentations.

## Getting Started

```
npm install --save react-atmo
```

## Hello, world!

```js
import React from "react";
import Atmo from "react-atmo";

Atmo.listen(
  <server port="9000">
    <route method="get" url="/unicorns">
      <response>
        {(request, response) => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
      <headers>        
        <jsonContentType />
        <crossOrigin />
        <header name="x-powered-by" value="Unicorn JS" />
      </headers>
    </route>
  </server>
);
```

## API
### `Atmo.listen(element, [callback])`
Starts an express server.

## Elements
### `<server>`
Creates a server app and starts listening on the provided port
* port - Port to start the server

### `<route>`
Attaches the route to the express app
* method - Http method name for the route. Supports all the methods those are supported by express.

* url - Url of the route.

### `<response>`
Represents the response of the route. Takes a function as a children. Whatever the function returns would be returned by the route.

Response function also receives request and response objects of express if you want to do something interesting.
```
<response>
  {(request, response) => {
    // play with the request and response object of express
    return {
      status: 'alive'
    }
  }}
</response>
```

### `<headers>`
Takes headers as children.

### `<header>`
Represents a response header

* name - Header name
  
* value - Header value
  
There are bunch of short hand headers for the commonly used headers as follows.

* <jsonContentType /> - Adds JSON content type header
* <xmlContentType /> - Adds XML content type header
* <textContentType /> - Adds text content type header
* <crossOrigin /> - Cross origin header

### `<delay>`
If you are creating a mock API and wants to simulate slowness, delay is the one you are looking for. The time is provided in milliseconds. Delay should be a direct children of an endpoint.
```
<delay time={1000} />
```

## Inspiration and Reference
[React-ionize](https://github.com/mhink/react-ionize) is a react custom renderer which targets electron. I have used react-ionize as a reference to build react-atmo. Infact I have used it as a boilerplate.