import { customStyles } from "./pageElements/customStyles";


export const portableText = {
    name: 'portableText',
    type: 'object',
    title: 'Portable Text',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'Will not be shown in the UI - for internal use only'
        },
        customStyles,
        {
            type: 'array',
            name: 'content',
            of: [
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                        validation: Rule => Rule.uri({
                                            scheme: ['http', 'https', 'mailto', 'tel']
                                        })
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean'
                                    }
                                ]
                            },
                        ]
                    }
                }
            ],
        }
    ]
}
