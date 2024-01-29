import { defineField } from "sanity";

export const img = defineField({
    name: 'img',
    type: 'image',
    fields: [
        defineField({
            name: 'alt',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ]
})