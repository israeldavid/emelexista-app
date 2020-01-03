// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi:'https://www.emelexista.com/wp-json/wp/v2/',
  categoria:'https://www.emelexista.com/wp-json/wp/v2/posts?filter[cat]=chicas',
  categorias:'https://www.emelexista.com/wp-json/wp/v2/categories',
  media:'https://www.emelexista.com/wp-json/wp/v2/media',
  tags:'https://www.emelexista.com/wp-json/wp/v2/tags'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
