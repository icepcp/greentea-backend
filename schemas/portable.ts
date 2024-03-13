export default {
  name: 'body',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }
      ],
    },
    {
      name: 'accordion',
      title: 'Accordion',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          validation: (Rule: { required: () => any; }) => Rule.required(),
          of: [{type: 'reference',to: [{type: 'pages'}]}]
        }
      ]
    },
  ]
}