'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require("path");
var Case = require("Case");

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.cwd = path.basename(process.cwd());
  },
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the riveting ' + chalk.red('GbTs') + ' generator!'
      ));

    var prompts = [
      {
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        name: "namespace",
        message: "What namepace should be used for internal modules?",
        default: Case.pascal(this.cwd)
      },
      {
        name: "packageName",
        message: "What name should be used for your package?",
        default: Case.kebab(this.cwd)
      },
      {
        name: "version",
        message: "Version?",
        default: "1.0.0"
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.tplContext = {
        "pkg": {
          "version": this.props.version,
          "name": this.props.packageName
        },
        "ts": {
          "namespace": this.props.namespace
        }
      };
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(this.templatePath("_bower.json"), this.destinationPath("bower.json"), this.tplContext);
      this.fs.copyTpl(this.templatePath("gulpfile.js"), this.destinationPath("gulpfile.js"), this.tplContext);
      this.fs.copyTpl(this.templatePath("_package.json"), this.destinationPath("package.json"), this.tplContext);
      this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"), this.tplContext);
      this.fs.copyTpl(this.templatePath("server.js"), this.destinationPath("server.js"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/jade/index.jade"), this.destinationPath("source/jade/index.jade"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/jade/templates/directives/thing.jade"), this.destinationPath("source/jade/templates/directives/thing.jade"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/jade/templates/states/about.jade"), this.destinationPath("source/jade/templates/states/about.jade"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/jade/templates/states/main.jade"), this.destinationPath("source/jade/templates/states/main.jade"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/app.ts"), this.destinationPath("source/js/app.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/controllers/about.ts"), this.destinationPath("source/js/controllers/about.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/controllers/main.ts"), this.destinationPath("source/js/controllers/main.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/directives/thing.ts"), this.destinationPath("source/js/directives/thing.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/filters/distance.ts"), this.destinationPath("source/js/filters/distance.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/services/thing.ts"), this.destinationPath("source/js/services/thing.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/services/storage.ts"), this.destinationPath("source/js/services/storage.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/directives.scss"), this.destinationPath("source/sass/directives.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/directives/location.scss"), this.destinationPath("source/sass/directives/location.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/directives/thing.scss"), this.destinationPath("source/sass/directives/thing.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/generals.scss"), this.destinationPath("source/sass/generals.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/reset.scss"), this.destinationPath("source/sass/reset.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/states.scss"), this.destinationPath("source/sass/states.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/states/about.scss"), this.destinationPath("source/sass/states/about.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/states/main.scss"), this.destinationPath("source/sass/states/main.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/style.scss"), this.destinationPath("source/sass/style.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/tsconfig.json"), this.destinationPath("source/tsconfig.json"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/SpecRunner.html"), this.destinationPath("test/SpecRunner.html"), this.tplContext);
      this.fs.copyTpl(this.templatePath("tsd.json"), this.destinationPath("tsd.json"), this.tplContext);
      this.fs.copyTpl(this.templatePath("tslint.json"), this.destinationPath("tslint.json"), this.tplContext);
    },

    tests: function () {
      this.fs.copyTpl(this.templatePath("test/specs.js"), this.destinationPath("test/specs.js"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/specs/main.ts"), this.destinationPath("test/specs/main.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/tsconfig.json"), this.destinationPath("test/tsconfig.json"), this.tplContext);
    }
  },

  install: function () {
    //this.spawnCommand('tsd', ['reinstall', '--overwrite', '--save']);
    //this.installDependencies();
  }
});
