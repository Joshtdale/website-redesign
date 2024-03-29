import { customStyles } from "./pageElements/customStyles"

const page = {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        customStyles,
        {
            title: 'Content',
            name: 'pageElements',
            type: 'pageElements',
          }
    //    { 
    //         name: 'image',
    //         title: 'Image',
    //         type: 'image',
    //         options: { hotspot: true },
    //         fields: [
    //             {
    //                 name: 'alt',
    //                 title: 'Alt',
    //                 type: 'string'
    //             }
    //         ],
    //     },
        // {
        //     name: 'url',
        //     title: 'URL',
        //     type: 'url',
        // },
        // {
        //     name: 'content',
        //     title: 'Content',
        //     type: 'array',
        //     of: [{ type: 'block'}]
        // },
    ]
}

export default page
