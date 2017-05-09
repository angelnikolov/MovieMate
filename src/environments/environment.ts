// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import IEnvironment from './IEnvironment'
import IAppConfig from './IAppConfig'
export const environment: IEnvironment = {
  production: false
};

export const APP_CONFIG: IAppConfig = {
  THEMOVIE_DB_BASE_URL: 'https://www.themoviedb.org',
  THEMOVIE_DB_API_URL: 'https://api.themoviedb.org/3',
  THEMOVIE_DB_API_KEY:'ca49bfda426c4e87678009d2dfc4361e',
  APP_URL: 'http://10.0.0.83:8090'
};