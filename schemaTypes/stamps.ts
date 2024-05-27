export default {
  name: 'stamps',
  type: 'document',
  title: 'Stamps',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'quantity',
      type: 'string',
      title: 'Quantity',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.max(10),
    },
  ],
};
