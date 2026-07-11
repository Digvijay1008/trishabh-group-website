import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for search engines and browser tabs.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description for search engines.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'shareImage',
      title: 'Share Image',
      type: 'image',
      description: 'Image used when sharing this page on social media.',
      options: {
        hotspot: true,
      },
    }),
  ],
})
