
import { type z } from "zod"
import { PortableTextType } from "@/types/portableText";
import { PortableText as SanityText, type PortableTextComponents } from "@portabletext/react"
import '../styles/PortableText/styles.css'


const components: PortableTextComponents = {
    marks: {
        link: ({ value, children }) => {
            const target = (value?._ref || '').startsWith('http') ? '_blank' : undefined;
            return <a href={value?.href} target={target}>
                {children}
            </a>
        }
    }
}

export const PortableText = ({ content }: {
    content: z.infer<typeof PortableTextType>;
}) => (
    <div key={content._key} className={`prose listStyle ${content.customStyles ? content.customStyles : ''}`}>
        <SanityText
            value={content.content}
            components={components}
        />
    </div>
);