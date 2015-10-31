# <% appName.capital %>
Just a mashup of 
[angular.js](http://angularjs.org),
 [TypeScript](http://typescriptlang.org),
 Jade

### Getting started

From the command line in your project directory

- npm install
- bower install
- tsd reinstall -so
- gulp

From separate command windows
- node server
- gulp watch

From the same separate command window
- cd source
- tsc -w
```javascript
let rs: IReplacment[] = [
    { r: /<% appName.kebab %>/g, replaceWith: '<% appName.kebab %>' },
    { r: /<% appName.snake %>/g, replaceWith: '<% appName.snake %>' },
    { r: /<% appName.capital %>/g, replaceWith: '<% appName.capital %>' }
];
```

