import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the heading of the navigation.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      description: 'The heading for navigation',
      title: 'Heading',
      type: 'object',
      fields: [
        defineField({
          title: 'Title',
          name: 'title',
          type: 'string',
        }),
        defineField({
          title: 'Link',
          name: 'link',
          type: 'url',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'navItems',
      title: 'Navigation Items list',
      description: 'Section links displayed on the navigation.',
      of: [
        defineField({
          type: 'object',
          name: 'navLink',
          title: 'Navigation Link',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Link',
              name: 'link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
