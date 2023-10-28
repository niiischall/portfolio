import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'experiments',
  title: 'Experiments',
  liveEdit: false,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'This field is the title of your experiments section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      name: 'heading',
      title: 'Heading',
      description: 'The heading for experiments',
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
    defineField({
      type: 'array',
      name: 'collection',
      title: 'Experiments',
      description: 'This field is for all your experiments',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'experiment',
          title: 'Experiment',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              description: 'This field is the title of your experiment section.',
            }),
            defineField({
              type: 'text',
              name: 'heading',
              title: 'Heading',
              description: 'This field is the heading of your experiment section.',
              validation: (rule) => rule.max(100).required(),
            }),
            defineField({
              type: 'text',
              name: 'body',
              title: 'Body',
              description: 'This field is the body of your experiment section.',
            }),
            defineField({
              type: 'object',
              name: 'link',
              title: 'Link',
              description: 'This field is the link of your experiment section.',
              fields: [
                defineField({
                  type: 'text',
                  name: 'text',
                  title: 'Text',
                  description: 'This field is the link text of your experiment section.',
                }),
                defineField({
                  type: 'url',
                  name: 'href',
                  title: 'Url',
                  description: 'This field is the link url of your experiment section.',
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
              description: 'This image will be used as the cover image for the experiment.',
            }),
          ],
        }),
      ],
    }),
  ],
})
