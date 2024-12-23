import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      defineField({
        name : 'name',
        type : 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
       options : {
        source : "name",
       }
      }),
     
    ],
  })