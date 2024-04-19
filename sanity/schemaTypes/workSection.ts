import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workSection',
  title: 'Work Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position (order)',
      type: 'number',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: { type: 'client' },
    }),
    defineField({
      name: 'sectionImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'autoCrop',
          type: 'boolean',
          title: 'Should Autocrop'
        }
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    })
  ],   
})
