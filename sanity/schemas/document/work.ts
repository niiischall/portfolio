import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your work section.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
