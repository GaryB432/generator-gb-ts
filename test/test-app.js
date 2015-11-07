'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('gb-ts:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ namespace: "MyNamespace", packageName: "pkg-name" })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'gulpfile.js',
      'package.json',
      'README.md',
      'server.js',
      'source/jade/index.jade',
      'source/js/app.ts',
      'source/sass/generals.scss',
      'source/sass/reset.scss',
      'source/sass/style.scss',
      'source/tsconfig.json',
      'test/SpecRunner.html',
      'test/specs.js',
      'test/specs/main.ts',
      'test/tsconfig.json',
      'tsd.json',
      'tslint.json'
    ]);
  });
});

describe('gb-ts:angular', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/angular'))
      .withOptions({ skipInstall: true })
      .withPrompts({ namespace: "MyNamespace", packageName: "pkg-name" })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'gulpfile.js',
      'package.json',
      'README.md',
      'server.js',
      'source/jade/index.jade',
      'source/jade/templates/directives/thing.jade',
      'source/jade/templates/states/about.jade',
      'source/jade/templates/states/main.jade',
      'source/js/app.ts',
      'source/js/controllers/about.ts',
      'source/js/controllers/main.ts',
      'source/js/directives/thing.ts',
      'source/js/filters/distance.ts',
      'source/js/services/thing.ts',
      'source/js/services/storage.ts',
      'source/sass/directives.scss',
      'source/sass/directives/location.scss',
      'source/sass/directives/thing.scss',
      'source/sass/generals.scss',
      'source/sass/reset.scss',
      'source/sass/states.scss',
      'source/sass/states/about.scss',
      'source/sass/states/main.scss',
      'source/sass/style.scss',
      'source/tsconfig.json',
      'test/SpecRunner.html',
      'test/specs.js',
      'test/specs/main.ts',
      'test/tsconfig.json',
      'tsd.json',
      'tslint.json'
    ]);
  });
});