# Angular 15 Starter Template

A comprehensive Angular 15 starter template featuring dynamic/configurable forms, authentication system, and admin dashboard components. This project provides a solid foundation for building modern web applications with pre-built authentication flows and flexible form generation.

## Features

- **Angular 15.2.10** - Latest stable version with modern features
- **Dynamic Forms** - Configurable form components (input, select, checkbox, button) that can be generated from JSON configuration
- **Authentication System** - Complete sign-in/sign-up functionality with route guards
- **Admin Dashboard** - Navigation, footer, and preloader components for admin interfaces
- **Responsive Design** - Built with Bootstrap 4 for mobile-first responsive layouts
- **Font Awesome Icons** - Comprehensive icon library included
- **TypeScript** - Full TypeScript support for better development experience
- **Lazy Loading** - Modular architecture with lazy-loaded routes for better performance

## Quick Start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration=production` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Dynamic Forms Usage

The dynamic form system allows you to create forms from JSON configuration:

```typescript
config = [
  {
    type: 'input',
    input_type: 'text',
    label: 'Username',
    name: 'username',
    placeholder: 'Enter your username',
    validators: [Validators.required]
  },
  {
    type: 'button',
    label: 'Submit'
  }
];
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
