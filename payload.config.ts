import { buildConfig } from 'payload/config';
import ExampleCollection from './src/collections/ExampleCollection';
import ExampleGlobal from './src/globals/ExampleGlobal';

export default buildConfig({
  collections: [ExampleCollection],
  globals: [ExampleGlobal],
  admin: {
    user: 'users',
  },
});
