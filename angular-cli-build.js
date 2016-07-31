/* global require, module */

const fs = require('fs');
const path = require('path');

// Import the require hook. Enables us to require TS files natively.
require('ts-node/register');

const Funnel = require('broccoli-funnel');
const MergeTree = require('broccoli-merge-trees');

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {

  const appTree = buildAppTree(defaults);

  const excludeServer = new Funnel('src', {
    exclude: ['server']
  });

  return new MergeTree([appTree, excludeServer], { overwrite: true });

};

function buildAppTree(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'lodash/*.js',

      /* ngrx/router begin */
      '@ngrx/**/*.+(js|js.map)',
      'ngrx-store-logger/dist/*.+(js|js.map)',
      'path-to-regexp/*.+(js|js.map)',
      'isarray/*.+(js|js.map)',
      'query-string/*.+(js|js.map)',
      'strict-uri-encode/*.+(js|js.map)',
      'object-assign/*.+(js|js.map)'
      /* ngrx/router end */
    ],
    "sassCompiler": {
      "cacheExclude": [/\/_[^\/]+$/]
    }
  });
}
