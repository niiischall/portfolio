import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiments',
  title: 'Experiments',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your experiments section.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
