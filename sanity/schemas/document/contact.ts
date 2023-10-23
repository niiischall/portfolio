import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your contact section.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
