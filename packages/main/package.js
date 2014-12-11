Package.describe({
  name: 'modular:main',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:init@1.0.0', { unordered: true} );

//  api.imply('modular:init@1.0.0');

  api.addFiles('main.js', 'server');
});
