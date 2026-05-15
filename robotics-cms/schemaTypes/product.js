export default {
  name: 'product',
  title: 'Products',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },

    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'height',
      title: 'Height',
      type: 'string',
    },

    {
      name: 'width',
      title: 'Width',
      type: 'string',
    },

    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },

    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
    },

    {
      name: 'payload',
      title: 'Payload Capacity',
      type: 'string',
    },

    {
      name: 'battery',
      title: 'Battery Life',
      type: 'string',
    },

    {
      name: 'connectivity',
      title: 'Connectivity',
      type: 'string',
    },

    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'images',
      title: 'Product Images',
      type: 'array',

      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};