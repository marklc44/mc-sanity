import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workSection',
  title: 'Work Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionImage',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    })
  ],   
})
