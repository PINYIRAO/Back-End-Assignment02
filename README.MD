<p align="center">
    <h1>Employee and Branch Management API</h1>
    <em>Easy to manage employee and branch information</em>
</p>

---

**Documentation**: <a href="https://pinyirao.github.io/Back-End-assignment05-OpenAPI-Docs/" target="_blank">https://pinyirao.github.io/Back-End-assignment05-OpenAPI-Docs/</a>

**Source Code**: <a href="https://github.com/PINYIRAO/Back-End-Assignment02/tree/assignment05" target="_blank">https://github.com/PINYIRAO/Back-End-Assignment02/tree/assignment05</a>

---

This is a framework for managing employee and branch information.

The key features are:

* **CURD**: Very reliable to mange the employee and branch information.
* **Security**: Secured the API with cors and helmet library.
* **Easy**: Easy to use. Less time debugging.
* **Easy**: Designed to be easy to use and learn. Less time reading docs.
* **Standards-based**: Based on (and fully compatible with) the open standards for APIs: <a href="https://github.com/OAI/OpenAPI-Specification" class="external-link" target="_blank">OpenAPI</a> (previously known as Swagger) and <a href="https://json-schema.org/" class="external-link" target="_blank">JSON Schema</a>.

## Requirements

## Installation

Create a project folder and then clone the project:

<div class="termy">

```console
$ git clone https://github.com/PINYIRAO/Back-End-Assignment02

```
### Configure it
Configure a .env file in the project root directory for dotenv containing the content as below:

NODE_ENV=filler
PORT=filler
FIREBASE_PROJECT_ID=filler
FIREBASE_PRIVATE_KEY=filler
FIREBASE_CLIENT_EMAIL=filler
SWAGGER_SERVER_URL=http://localhost:3000/api/v1

### Run it

Run the server with:

<div class="termy">

```console
$ npm start

> back-end-assignment02@1.0.0 start
> ts-node src/server.ts

(node:30528) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Server is running on port 3000

</div>

### Check it

Open your browser at <a href="http://localhost:3000/health" class="external-link" target="_blank">http://localhost:3000/health</a>.

You will see the string response as:

```String
Server is healthy
```

You already started the API server successfully

### Interactive API docs

Now go to <a href="http://localhost:3000/api-docs/" class="external-link" target="_blank">http://localhost:3000/api-docs/</a>.

You will see the automatic interactive API documentation (provided by <a href="https://github.com/swagger-api/swagger-ui" class="external-link" target="_blank">Swagger UI</a>):

![Swagger UI](./public/swagger-01.png)

### Alternative API docs

And now, go to <a href="https://pinyirao.github.io/Back-End-assignment05-OpenAPI-Docs/" class="external-link" target="_blank">https://pinyirao.github.io/Back-End-assignment05-OpenAPI-Docs/</a>.

You will see the alternative documentation (provided by GitHub Pages):

![ReDoc](http://localhost:3000/static/alternative-api-docs-02)


### Interactive API docs 

Now go to <a href="http://localhost:3000/api-docs/" class="external-link" target="_blank">http://localhost:3000/api-docs/</a>.

* The interactive API documentation will be automatically updated, including the new body:

![Swagger UI](http://localhost:3000/static/swagger-02.png)

* Click on the button "Try it out", it allows you to fill the parameters and directly interact with the API:

![Swagger UI interaction](http://localhost:3000/static/swagger-03.png)

* Then click on the "Execute" button, the user interface will communicate with your API, send the parameters, get the results and show them on the screen:

![Swagger UI interaction](http://localhost:3000/static/swagger-04.png)


Coming back to the previous code example, **Employee and Branch Management API** will:

* Validate the data in the path for `POST` and `PUT` requests.
    * check to see whether the data type is valid
    * check to see whether the string length is valid 
    * check to see whether the required parameters are missing 

---
## Dependencies

This API application depends on Express, firebase, Joi, helmet, and cors and other libraries..

## License

This project is licensed under the terms of the MIT license.