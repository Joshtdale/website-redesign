import { img } from "../figure";

export const pageElements = {
    name: "pageElements",
    title: "Page Elements",
    type: "array",
    of: [
        { type: 'contentBlock' },
        { type: 'reference', name:'contentBlockReference', to: [{ type: 'contentBlock' }] },
        { type: 'portableText' },
        { ...img, title: 'Image' },
        // {type:"link"},
        // {type:'tab'},
        // {type:'contactUs'},
        // {type: 'currentRoster'},
        // {type:'htmlEmbed'},
        // {type:'sharedAccordion'},
        // {type:'storyGrid'},
        // {type: 'allMatches'},
        // {type: 'matchGrid'},
        // {type: 'boardMembersSection'},
        // {type: 'contactForm'},
        // {type: 'gigyaScreenset'},
        // {type: 'membershipAccordion'},
        // {type:'membershipChart'},
        // {type:'membershipButtonGroup'},
        // { type: 'createAccountForm' },
        // { type: 'signInForm' },
        // { type: 'portableText' },
        // { type: 'button' }
    ]
};
