Package.describe({
  name: 'bizarro:clientjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Package to fingerprint the client machine',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use([
      'ecmascript',
      'check'
  ]);
  api.mainModule('clientjs.js');
});

Package.onTest(function(api) {
  api.use([
      'ecmascript',
      'random',
      'check',
      'practicalmeteor:mocha'
  ]);
  api.use('bizarro:clientjs');
  api.mainModule('clientjs-tests.js');
});
