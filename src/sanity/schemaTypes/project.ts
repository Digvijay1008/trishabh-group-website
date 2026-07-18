import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ongoing', value: 'Ongoing' },
          { title: 'Upcoming', value: 'Upcoming' },
          { title: 'Completed', value: 'Completed' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Chembur, Mumbai',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      description: 'e.g., 3 & 4 BHK Luxury Residences',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., Price on Request',
    }),
    defineField({
      name: 'area',
      title: 'Project Area',
      type: 'string',
      description: 'e.g., 2.1 Acres',
    }),
    defineField({
      name: 'units',
      title: 'Total Units',
      type: 'string',
      description: 'e.g., 120',
    }),
    defineField({
      name: 'completion',
      title: 'Completion Timeline',
      type: 'string',
      description: 'e.g., Dec 2026',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (Thumbnail)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bgBase',
      title: 'Background Base Color',
      type: 'string',
      description: 'Hex code for the card background, e.g., #EDE9E2',
    }),
    defineField({
      name: 'towerColor',
      title: 'Tower Text Color',
      type: 'string',
      description: 'Hex code for the tower name, e.g., #8C7B6B',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Color',
      type: 'string',
      description: 'Hex code for badges and accents, e.g., #C8A870',
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      description: 'A beautifully written paragraph describing the project vision.',
    }),
    defineField({
      name: 'amenities',
      title: 'Key Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key amenities (e.g., Infinity Pool, Gym)',
    }),
    defineField({
      name: 'mahareraNumber',
      title: 'MahaRERA Registration Number',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
    }),
  ],
})
