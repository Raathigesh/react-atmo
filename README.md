# React Atmo

React atmo is a custom renderer for [express](https://expressjs.com/). This is an experimental project, supports very minimal features and not suitable for production apps. **But it's a great fit for creating mock APIs for demos and presentations.**

## Getting Started

```
npm install --save react-atmo
```

## Hello, world!

```javascript
import React from "react";
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
          description: "The fiery one"
        })}
      </response>
    </route>
  </server>
);
```

Take a look at the sample project [here](https://github.com/Raathigesh/react-atmo-sample). This sample project rebuilds on file changes, thanks to [backpack](https://github.com/jaredpalmer/backpack), a create-react-app like toolchain for node projects.

## API
### `Atmo.listen(element, [callback])`
Starts an express server.

## Elements
### `<server>`
Creates a server app and starts listening on the provided port

> `port` - Port to start the server

### `<route>`
Attaches the route to the express app
> `method` - Http method name for the route.
> `url` - Url of the route.

### `<response>`
Represents the response of the route. Takes a function as a children. Whatever the function returns would be returned by the route.

Response function also receives request and response objects of express, if you want to do something interesting.
```javascript
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

#### `<header>`
Represents a response header
```javascript
<header name="x-powered-by" value="Unicorn JS" />
```
> `name` - Header name  
> `value` - Header value
  
There are bunch of headers available for you to use readily.

```javascript
import Atmo, { Headers } from "react-atmo";
```
* ```<Headers.JsonContentTypeHeader />``` - Adds JSON content type header
* ```<Headers.CrossOriginHeader />``` - Adds Cross origin header

### `<delay>`
If you are creating a mock API and wants to simulate slowness, delay is the one you are looking for.
```javascript
<delay time={1000} />
```
> `time` - Delay in milliseconds.


## <middlewares>
Accepts ```<middleware />``` as children.

### static middleware
```javascript
<static path="./" />
```
> `path` | Path of the folder to expose as static directory.

## Inspiration and Reference
[React-ionize](https://github.com/mhink/react-ionize) is a react custom renderer which targets electron. I have used react-ionize as a reference to build react-atmo. Infact I have used it as a boilerplate.