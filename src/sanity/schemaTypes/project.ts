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
          { title: 'Current Project', value: 'current' },
          { title: 'Upcoming Project', value: 'upcoming' },
          { title: 'Completed Project', value: 'completed' },
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A short summary for the project cards.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description for the project page.',
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
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Photos for the project detail page.',
    }),
    defineField({
      name: 'configurations',
      title: 'Configurations',
      type: 'string',
      description: 'e.g., 2, 3 & 4 BHK Luxury Residences',
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
