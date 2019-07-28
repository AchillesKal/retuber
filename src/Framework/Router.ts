import RouterInterface from './RouterInterface';

export default class Router implements RouterInterface{
  private routeCollection: string[];

  constructor(routerCollection: string[]) {
    this.routeCollection = routerCollection;
  }

  getRoute(request: any): any {
    let index = this.routeCollection.indexOf(request.url);

    if (index === -1) {
      return false;
    }

    return this.routeCollection[index];
  }
}