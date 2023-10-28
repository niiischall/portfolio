import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'contact',
  title: 'Contact',
  liveEdit: false,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'This field is the title of your contact section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      name: 'heading',
      title: 'Heading',
      description: 'The heading for contact',
      fields: [
        defineField({
          type: 'string',
          name: 'title',
          title: 'Title',
        }),
        defineField({
          type: 'url',
          name: 'link',
          title: 'URL',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      description: 'Used for body on the contact section',
      title: 'Text',
      type: 'array',
      of: [
        defineArrayMember({
          lists: [],
          marks: {
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(250).required(),
    }),
  ],
})
