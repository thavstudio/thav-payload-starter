import { buildConfig } from 'payload';

import ExampleCollection from './src/collections/ExampleCollection.ts';
import Users from './src/collections/Users.ts';
import ExampleGlobal from './src/globals/ExampleGlobal.ts';

export default buildConfig({
  collections: [ExampleCollection, Users],
  globals: [ExampleGlobal],
  admin: {
    user: 'users',
  },
  db: {
    adapter: 'mongodb',
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/thav-payload-starter',
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-key',
});
