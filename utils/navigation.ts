import { IRoute } from '@/types/navigation';

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (routes: (IRoute | any)[]): IRoute => {
  const foundRoute: any = routes.find(
    route =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  return foundRoute;
};

export const getActiveRoute = (routes: (IRoute | any)[]): string => {
  const route = findCurrentRoute(routes);
  return route?.name || 'Default Brand Text';
};

export const getActiveNavbar = (routes: (IRoute | any)[]): any => {
  const route = findCurrentRoute(routes);
  return route?.secondary;
};

export const getActiveNavbarText = (
  routes: (IRoute | any)[]
): string | boolean => {
  return getActiveRoute(routes) || false;
};
