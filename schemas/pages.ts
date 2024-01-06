import portable from "./portable";

export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'This is the name of the document, it does not matter what you set it as.',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'title',
      type: 'text',
      title: 'Title',
      rows: 2,
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      title: 'Primary Image',
      name: 'img',
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
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      title: 'Show on homepage?',
      name: 'showonhome',
      type: 'boolean',
      initialValue: false,
    },
    portable
  ]
}