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
    }
  ]
}