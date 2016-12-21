# angularJwtAuthorisation

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

# About this project

Hoping this simple kickstart template will benefit others in adding user registration and validation with JWT Authorisation implemented with NodeJs on the backend, you can find it [here](https://github.com/rrubio/NodeJsJWT). Project inspired by Jason Watmore's tutorial with Mockbackend.

# NodeJs backend + mongodb

[You can find the back end here](https://github.com/rrubio/NodeJsJWT), make sure you have nodejs, express generator and mongodb installed.

# Token Storage

Currently stores token under localStorage - refreshment of token coming soon.

# Todo's

1. Refresh of tokens after a set expiry date.
2. Other contributors welcome!

# API URL 

I've created a service `ConstantService` to store any application wide configurations. Simply adjust the `API_URL` to reference in other http service calls.

# Active Endpoints 

Under `_services` you'll find `user.services`, note not all endpoints are currently active on the backend. This is something you can easily adjust according to your needs.

NOTE: Authorisation/Login is done under `_services/authentication.service`.

Active Endpoints:

1. create - executed on user registration
2. login
3. getUsers - executed after login redirect (lists all users)

# Ackknowledgements

Thank you Jason Watmore for a great [JWT Mockbackend Tutorial](http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
