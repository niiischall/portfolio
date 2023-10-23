import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'writings',
  title: 'Writings',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your writings section.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
