import { Route } from '@angular/router';

export const websiteShellFeatureRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@comunidad/website/homepage/feature').then(
        (m) => m.WebsiteHomepageFeatureModule
      ),
  },
];
