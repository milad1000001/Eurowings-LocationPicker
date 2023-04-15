/* eslint-disable no-shadow */
import { createServer } from 'miragejs';
import Json from '../server/data.json';

export function makeServer({ environment } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = 'api';
      this.timing = 2000;
      this.get('/offers', () => Json);
    },
  });

  return server;
}
