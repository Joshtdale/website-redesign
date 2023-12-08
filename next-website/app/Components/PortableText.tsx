
// import { type z } from "zod"
// import { type SanityPortableText } from "../_schemas/landingPage";
// import { PortableText as SanityText, type PortableTextComponents } from "@portabletext/react"
// import 'src/styles/PortableText/styles.css'


// const components: PortableTextComponents = {
//     marks: {
//         link: ({ value, children }) => {
//             const target = (value?._ref || '').startsWith('http') ? '_blank' : undefined;
//             console.log('link is', value, 'target -', target)
//             return <a href={value?.href} target={target}>
//                 {children}
//             </a>
//         }
//     }
// }

// export const PortableText = ({ content }: {
//     content: z.infer<typeof SanityPortableText>;
// }) => (
//     <div key={content._key} className={`prose listStyle ${content.customStyles ? content.customStyles : ''}`}>
//         <SanityText
//             value={content.content}
//             components={components}
//         />
//     </div>
// );