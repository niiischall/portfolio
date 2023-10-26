import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talks',
  title: 'Talks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your talks section.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
