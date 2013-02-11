/** testacular-config.js */


// base path, that will be used to resolve files and exclude
basePath = '../';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  
  // lib
  // 'ext/lib/test/jquery-1.4.4.js',
  
  // compiled src
  // 'socklyserver.js',
  'lib/client.js',
  
  // test src
  'test/client.spec.js'
];

// list of files to exclude
exclude = [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots' || 'progress'
// reporters = [ 'dots', 'junit' ];
reporter = 'dots';

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS

// browsers = [ 'Chrome',  'Firefox', 'PhantomJS', 'Safari' ];
browsers = [ 'PhantomJS' ];

// Auto run tests on start (when browsers are captured) and exit
singleRun = false;