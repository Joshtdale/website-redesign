import { safelist } from "@/tailwindSafelist";

export const customStyles = {
    name: 'customStyles',
    type: 'text',
    title: 'Custom Styles',
    description: 'Tailwind classes can be applied to the content section',
    rows: 3,
    validation: (Rule: any) => Rule.custom((customStyles: { split: (arg0: string) => { (): any; new(): any; flatMap: { (arg0: (c: any) => any): { (): any; new(): any; flatMap: { (arg0: (c: any) => any): { (): any; new(): any; map: { (arg0: (c: any) => any): { (): any; new(): any; filter: { (arg0: (c: any) => boolean): never[]; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
        const notSafelisted = customStyles?.split(' ').flatMap(c => c.split(`\n`)).flatMap(c => c.split(`\n\n`)).map(c => c.trim()).filter(c => !safelist.includes(c)) ?? [];
        return notSafelisted.length > 0 ? `The following classNames are not listed in the Tailwind Safelist: ${notSafelisted.join(',')}` : true;
    })
};
