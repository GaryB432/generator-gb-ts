'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require("path");
var Case = require("case");

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
      this.fs.copyTpl(this.templatePath("tsd.json"), this.destinationPath("tsd.json"), this.tplContext);
      this.fs.copyTpl(this.templatePath("tslint.json"), this.destinationPath("tslint.json"), this.tplContext);
    },

    source: function () {

      this.fs.copyTpl(this.templatePath("source/jade/index.jade"), this.destinationPath("source/jade/index.jade"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/js/app.ts"), this.destinationPath("source/js/app.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/app.scss"), this.destinationPath("source/sass/app.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/generals.scss"), this.destinationPath("source/sass/generals.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/reset.scss"), this.destinationPath("source/sass/reset.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/sass/style.scss"), this.destinationPath("source/sass/style.scss"), this.tplContext);
      this.fs.copyTpl(this.templatePath("source/tsconfig.json"), this.destinationPath("source/tsconfig.json"), this.tplContext);
    },

    tests: function () {
      this.fs.copyTpl(this.templatePath("test/SpecRunner.html"), this.destinationPath("test/SpecRunner.html"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/specs.js"), this.destinationPath("test/specs.js"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/specs/main.ts"), this.destinationPath("test/specs/main.ts"), this.tplContext);
      this.fs.copyTpl(this.templatePath("test/tsconfig.json"), this.destinationPath("test/tsconfig.json"), this.tplContext);
    }
  },

  install: function () {
    // this.spawnCommand('tsd', ['reinstall', '--overwrite', '--save']);
    this.installDependencies();
  }
});
