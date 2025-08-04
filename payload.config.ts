import { buildConfig } from 'payload';

import ExampleCollection from './src/collections/ExampleCollection';
import Users from './src/collections/Users';
import ExampleGlobal from './src/globals/ExampleGlobal';

export default buildConfig({
  collections: [ExampleCollection, Users],
  globals: [ExampleGlobal],
  admin: {
    user: 'users',
  },
});
