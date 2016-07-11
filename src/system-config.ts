/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  /* ngrx/router begin */
  '@ngrx': 'vendor/@ngrx',
  'path-to-regexp': 'vendor/path-to-regexp',
  'isarray': 'vendor/isarray',
  'query-string': 'vendor/query-string',
  'strict-uri-encode': 'vendor/strict-uri-encode',
  'lodash': 'vendor/lodash/lodash.js',
  'object-assign': 'vendor/object-assign'
  /* ngrx/router end */
};

/** User packages configuration. */
const packages: any = {
  /* ngrx/router begin */
  '@ngrx/core': {
    main: 'index.js',
    format: 'cjs'
  },
  '@ngrx/store': {
    main: 'index.js',
    format: 'cjs'
  },
  '@ngrx/router': { main: 'index' },
  'path-to-regexp': { main: 'index' },
  'isarray': { main: 'index' },
  'query-string': { main: 'index' },
  'strict-uri-encode': { main: 'index' },
  'object-assign': { main: 'index' }
  /* ngrx/router end */
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/forms',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/progress-nav',
  'app/shared/header',
  'app/shared/order-summary',
  'app/order-info',
  'app/shipping-info',
  'app/shipping-method',
  'app/payment-method',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
