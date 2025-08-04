import { CollectionConfig } from 'payload/types';

const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
};

export default ExampleCollection;
