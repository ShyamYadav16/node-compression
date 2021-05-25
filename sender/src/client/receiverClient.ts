import { defaults } from 'request';

export const receiverClient = defaults({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Encoding': 'br'
  }
});