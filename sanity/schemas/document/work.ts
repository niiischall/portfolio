import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  liveEdit: false,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your work section.',
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
      name: 'experiences',
      description: 'This field is for all your work experience',
      title: 'workExperiences',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'experience',
          type: 'object',
          title: 'Experience',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'designation',
              type: 'string',
              title: 'Designation',
            },
            {
              name: 'organization',
              title: 'Organization',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'object',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'url',
                    },
                  ],
                }),
                defineField({
                  name: 'duration',
                  type: 'duration',
                  title: 'Work Duration',
                }),
                defineField({
                  name: 'description',
                  description: 'Used for describing the project.',
                  title: 'Description',
                  type: 'string',
                  validation: (rule) => rule.max(1000).required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
