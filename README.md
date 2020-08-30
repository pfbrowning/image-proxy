# Image Proxy
![Node.js CI](https://github.com/pfbrowning/image-proxy/workflows/Node.js%20CI/badge.svg)
A simple image proxy built with Node.js and Express

This is an early POC.  I'll write a proper readme once the project is closer to completion.

TODO
* Configure CI / CD pipeline
* Strip out the `set-cookie` response header
* Filter non-image response types
* Whitelist by referer
* Investigate more modern alternatives to [request](https://github.com/request/request)
* Log response errors
* Don't pass response body for non-200 status codes
* Handle 302 if necessary
* Configure Winston
* Configure Morgan
* Log to AppInsights
* Gitignored local config
* Configure linting via `standard`
* Configure Jasmine
* Query param validation
* Middlewares
* Consistent API responses
* Swagger
* Code coverage badge
* Write unit tests
* Write readme
* Set keywords