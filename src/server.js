/* eslint-disable no-shadow */
import { createServer, Model } from 'miragejs';
import Json from '../server/data.json';

export function makeServer({ environment } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = 'api';
      this.timing = 1000;
      this.get('/offers', () => Json);
    },
  });

  return server;
}
