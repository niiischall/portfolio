import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your about section.',
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
      name: 'overview',
      description: 'Used both for the <meta> description tag for SEO, and project subheader.',
      title: 'Overview',
      type: 'array',
      of: [
        defineArrayMember({
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'contact',
      description: 'This field is the contact of your about section.',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'icon',
          type: 'url',
          title: 'Icon',
        },
        {
          name: 'contact',
          type: 'string',
          title: 'Info',
        },
      ],
    }),
  ],
})
