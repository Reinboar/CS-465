import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { JwtInterceptor, authInterceptProvider } from './utils/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authInterceptProvider
  ]
};
