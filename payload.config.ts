import { buildConfig } from 'payload';

import ExampleCollection from './src/collections/ExampleCollection.ts';
import Users from './src/collections/Users';
import ExampleGlobal from './src/globals/ExampleGlobal.ts';

export default buildConfig({
  collections: [ExampleCollection, Users],
  globals: [ExampleGlobal],
  admin: {
    user: 'users',
  },
});
