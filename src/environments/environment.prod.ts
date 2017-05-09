import IEnvironment from './IEnvironment'
import IAppConfig from './IAppConfig'
export const environment: IEnvironment = {
  production: true
};

export const APP_CONFIG: IAppConfig = {
  THEMOVIE_DB_BASE_URL: 'https://www.themoviedb.org',
  THEMOVIE_DB_API_URL: 'https://api.themoviedb.org/3',
  THEMOVIE_DB_API_KEY:'ca49bfda426c4e87678009d2dfc4361e',
  APP_URL: 'http://10.0.0.83:8090'
};