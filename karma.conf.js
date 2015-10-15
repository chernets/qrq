// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/get-style-property/get-style-property.js',
      'client/bower_components/get-size/get-size.js',
      'client/bower_components/eventie/eventie.js',
      'client/bower_components/doc-ready/doc-ready.js',
      'client/bower_components/eventEmitter/EventEmitter.js',
      'client/bower_components/matches-selector/matches-selector.js',
      'client/bower_components/outlayer/item.js',
      'client/bower_components/outlayer/outlayer.js',
      'client/bower_components/masonry/masonry.js',
      'client/bower_components/imagesloaded/imagesloaded.js',
      'client/bower_components/jquery-bridget/jquery.bridget.js',
      'client/bower_components/angular-masonry/angular-masonry.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/bower_components/ngmap/build/scripts/ng-map.js',
      'client/bower_components/angular-google-maps/dist/angular-google-maps.js',
      'client/bower_components/angularjs-geolocation/src/geolocation.js',
      'client/bower_components/ng-file-upload/ng-file-upload.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'client/app/app.js',
      'client/app/app.coffee',
      'client/app/**/*.js',
      'client/app/**/*.coffee',
      'client/components/**/*.js',
      'client/components/**/*.coffee',
      'client/app/**/*.jade',
      'client/components/**/*.jade',
      'client/app/**/*.html',
      'client/components/**/*.html'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      '**/*.coffee': 'coffee',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
