export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'lefttext',
      type: 'text',
      title: 'Left Text',
      validation: Rule => Rule.required()
    },
    {
      name: 'righttext',
      type: 'text',
      title: 'Right Text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Background Image',
      name: 'bgimg',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}