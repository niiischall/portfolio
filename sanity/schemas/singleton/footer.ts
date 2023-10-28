import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'This field is the title of the footer.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      name: 'heading',
      title: 'Heading',
      description: 'The heading for footer',
      fields: [
        defineField({
          type: 'string',
          name: 'text',
          title: 'Text',
        }),
        defineField({
          type: 'url',
          name: 'href',
          title: 'Link',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
