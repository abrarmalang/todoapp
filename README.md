# Dependencies
Java 8 required to build the backed
Gradle 4.2.1 or higher
Nodejs 6.9 or higer
Angular CLI

# Install dependencies

Java 8 - Install from http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Gradle - Install from https://gradle.org/install/

Nodejs - https://nodejs.org/en/download/

Angular CLI - https://github.com/angular/angular-cli#installation


Angular CLI - Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.
The front end is angular cli generated and will need this dependency install.

Run `npm install -g @angular/cli` to install this dependency.

# Build

Frontend sub project need to be built first.
Change to frontend directory `cd frontend`

Run `ng build` to build the frontend project. 

# Run

Change back to project home directory

Run `gradle build`

Run `gradle clean bootRun`

open http://localhost:8080/index.html





Front end development change to frontend directory and please have angular cli installed
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
