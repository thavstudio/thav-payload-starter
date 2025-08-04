import { CollectionConfig } from 'payload/types';

const ExampleCollection: CollectionConfig = {
  slug: 'examples',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};

export default ExampleCollection;
