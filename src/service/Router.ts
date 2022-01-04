export class Router {
  private static __instance: any;
  routes: any;
  history: any;
  _currentRoute: any;
  _rootQuery: string;

  constructor(rootQuery: string = "#root") {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, view: () => void) {
    const route = new Route(pathname, view, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    let pathname = window.location.pathname;

    const filterRoute = this.routes.filter(
      (route: { _pathname: string }) => route._pathname === pathname
    );

    if (filterRoute.length === 0) pathname = "/404";

    window.onpopstate = ((event: any) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) return;

    this._currentRoute = route;
    route.render(route);
  }

  getRoute(pathname: string) {
    return this.routes.find(
      (item: { _pathname: string }) => item._pathname === pathname
    );
  }
}

class Route {
  _pathname: string;
  _blockClass: () => void;
  _block: any;
  _props: any;

  constructor(
    pathname: string,
    view: () => void,
    props: { [key: string]: any }
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  render(route: { [key: string]: any }) {
    if (!this._block) {
      route._blockClass();
    }
  }
}

export const router = new Router();
