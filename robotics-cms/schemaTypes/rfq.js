export default {
  name: 'rfq',
  title: 'RFQ Requests',
  type: 'document',

  fields: [

    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },

    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },

    {
      name: 'product',
      title: 'Product Interested In',
      type: 'string',
    },

    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },

    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },

  ],
};