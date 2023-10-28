import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'work',
  title: 'Work',
  liveEdit: false,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'This field is the title of your work section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      name: 'heading',
      title: 'Heading',
      description: 'This field is the heading for work section',
      fields: [
        defineField({
          type: 'string',
          name: 'title',
          title: 'Title',
        }),
        defineField({
          type: 'url',
          name: 'link',
          title: 'Link',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'collection',
      title: 'Work Experience',
      description: 'This field is for your work experience',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'experience',
          title: 'Experience',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              description: 'Used for title of experience.',
            }),
            defineField({
              type: 'string',
              name: 'designation',
              title: 'Designation',
              description: 'Used for designation.',
            }),
            defineField({
              type: 'object',
              name: 'org',
              title: 'Organization',
              fields: [
                defineField({
                  type: 'object',
                  name: 'link',
                  title: 'Link',
                  description: 'Used for link of the organization.',
                  fields: [
                    defineField({
                      type: 'string',
                      name: 'name',
                      title: 'Name',
                    }),
                    defineField({
                      type: 'url',
                      name: 'href',
                      title: 'URL',
                    }),
                  ],
                }),
                defineField({
                  type: 'duration',
                  name: 'duration',
                  title: 'Duration',
                  description: 'Used for duration of the experience.',
                }),
                defineField({
                  type: 'string',
                  name: 'description',
                  title: 'Description',
                  description: 'Used for describing the experience.',
                  validation: (rule) => rule.max(1000).required(),
                }),
              ],
            }),
            defineField({
              type: 'image',
              name: 'cover',
              title: 'Image',
              options: {
                hotspot: true,
              },
              description: 'This image will be used as the cover image for the experience.',
            }),
          ],
        }),
      ],
    }),
  ],
})
