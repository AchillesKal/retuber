import http from 'http';
import Router from './Router';
import RouterInterface from './RouterInterface';

export default class Framework {
  readonly hostname: string;
  readonly port: number;
  router: RouterInterface;

  constructor(hostname: string, port: number) {
    this.hostname = hostname;
    this.port = port;
    this.router = new Router(['/', '/about', '/contact']);
  }

  run() {
    const server = http.createServer((request, response) => {

      const route = this.router.getRoute(request);

      if (route) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(route);
      } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end("Page not found");
      }

    });

    server.listen(this.port, this.hostname, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    });

  }
}