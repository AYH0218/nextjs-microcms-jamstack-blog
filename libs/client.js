import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ayh',
  apiKey: process.env.API_KEY,
});
