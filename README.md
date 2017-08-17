<p align="center">
 <img src="./docs/ReactAtmo.png" width="600" alt="react-atmo" > 
</p>

<p align="center"> 
  <a href="https://github.com/Raathigesh/react-atmo/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square"
         alt="License">
  </a>
  <a href="https://www.npmjs.com/packages/react-atmo">
    <img src="https://img.shields.io/npm/v/react-atmo.svg?style=flat-square"
         alt="NPM Version">
  </a>
</p>



React atmo is a custom renderer for [express js](https://expressjs.com/). This is an experimental project, supports very minimal features and not suitable for production apps. **But it's a great fit for creating mock APIs for demos and presentations.**

## Is this a good idea?
I'm pretty sure it's not! But it's lot of fun!

## Getting Started

Start with the [starter kit](https://github.com/Raathigesh/react-atmo-sample) powered by [backpack](https://github.com/jaredpalmer/backpack).

```
yarn add react-atmo
```

## Hello, world!

```javascript
import React from "react";
import Atmo, { Headers } from "react-atmo";

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
Have a look at the examples [here](https://github.com/Raathigesh/react-atmo/tree/master/examples).

## API
### `Atmo.listen(element, [callback])`
Starts an express server.

## Elements
### `<server>`
Creates a server app and starts listening on the provided port

> `port` | Server port

### `<route>`
Attaches the route to the express app
> `method` | Http method name for the route.

> `url` | Url of the route.

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
Takes ```<header />``` as children.

#### `<header>`
Represents a response header
```javascript
<header name="x-powered-by" value="Unicorn JS" />
```
> `name` | Header name

> `value` | Header value
  
Save some typing and use the following header presets.

```javascript
import Atmo, { Headers } from "react-atmo";
```
* ```<Headers.JsonContentTypeHeader />``` - Adds JSON content type header
* ```<Headers.CrossOriginHeader />``` - Adds Cross origin header

### `<status>`
> `code` | Satus code number

Should be a childen of the ```<route />``` element.

Save some typing and use the following status presets.
```javascript
import Atmo, { Status } from "react-atmo";
```

* ```<Status.Ok />``` - Code 200
* ```<Status.Unauthorized />``` - Code 401
* ```<Status.BadRequest />``` - Code 400
* ```<Status.Forbidden />``` - Code 403
* ```<Status.NotFound />``` - Code 404
* ```<Status.InternalServerError />``` - Code 500

### `<delay>`
If you are creating a mock API and wants to simulate slowness, delay is the one you are looking for.
```javascript
<delay time={1000} />
```
> `time` | Delay in milliseconds.


## `<middlewares>`
Accepts ```<middleware />``` as children.

### `<static>`
The static middleware.
```javascript
<static path="./" />
```
> `path` | Path of the folder to expose as static directory.

### `<bodyparser>`
The body parser middleware.
```javascript
<bodyparser />
```

### `<middleware>`
Your own, custom middleware.
```javascript
<middleware>
{app => {
  // use the app and do whatever you want
}}
</middleware>
```

### `<servers>`
When you are not happy with a single instance and wants multiple apps listening on different ports.

```javascript
import React, { Component } from "react";
import Atmo from "react-atmo";

Atmo.listen(
  <servers>
    <server port="9001">    
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one"
          })}
        </response>
      </route>
    </server>
    <server port="9002">    
      <route method="get" url="/unicorns">
        <response>
          {() => ({
            name: "Adiana",
            description: "The fiery one, from server 2"
          })}
        </response>
      </route>
    </server>
  </servers>
);
```

## Kitchen sink
```javascript
import React, { Component } from "react";
import Atmo, { Headers, Status } from "react-atmo";

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
      <headers>
        <Headers.CrossOriginHeader />
        <Headers.JsonContentTypeHeader />
        <header name="x-powered-by" value="Unicorn JS" />
      </headers>
      <response>
        {() => ({
          name: "Adiana",
          description: "The fiery one"
        })}
      </response>
      <delay time={3000} />
      <Status.Ok />
    </route>
  </server>
);

```

## Inspiration and Reference
[React-ionize](https://github.com/mhink/react-ionize) is a react custom renderer which targets electron. I have used react-ionize as a reference to build react-atmo. Infact, I have used it as a boilerplate.
