import { defineField } from "sanity";

export const img = defineField({
    name: 'image',
    type: 'image',
    title: 'Figure',
    fields: [
      { 
        name: 'alt',
        type: 'string',
        title: 'Alt'
      },
      // { 
      //   name: 'link',
      //   type: 'link',
      //   title: 'Link'
      // },
      {
        name: 'height',
        type: 'number',
        title: 'Height'
      },
      {
        name: 'width',
        type: 'number',
        title: 'Width'
      },
      {
        name: 'customStyles',
        type: 'string',
        title: 'Custom Styles'
      },
      {
        name: 'figureStyles',
        type: 'string',
        title: 'Figure Styles',
        description: 'Some styles should not be applied directly to the image, e.g. width styles. Add those here.'
      },
    ]
  });