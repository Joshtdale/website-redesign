import { defineField } from "sanity";
import { customStyles } from "../pageElements/customStyles";
import { img } from "../img";


export const contentBlock = {
    name: "contentBlock",
    title: "Content Block",
    type: "object",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        customStyles,
        defineField({
            ...img,
            name: 'bgImage',
            options: {
                collapsed: true,
                hotspot:true
            }
        }),
        {
            name: 'content',
            type: 'pageElements',
            title: 'Content'
        }
    ]
};
export const contentBlockReference = {
    name: "contentBlockReference",
    title: "Content Block (Reuseable)",
    type: "document",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'For Sanity use only. Will not display on the UI.'
        },
        {
            name: 'contentBlock',
            type: 'contentBlock',
            title: 'Content Block'
        }
    ]
}