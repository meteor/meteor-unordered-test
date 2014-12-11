Package.describe({
  name: 'modular:init',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:main@1.0.0');

  api.addFiles('init.js', 'server');
  api.export('ModularClass', ['client', 'server']);
});
