import { urlForImage } from "@/sanity/hooks/image";
import { PageContent } from "./pageContent"
// import { type PageElementsSchemaUnion } from "../_schemas/landingPage"
import { type z } from "zod"

type Props = {
    _type?: string;
    content?: any;
    customStyles?: string;
    title?: string | null;
    bgImage?: {
        asset: {
            _ref: string;
            _type: 'image'
        }
    }
    _ref?: string;
    preview?: {
        token?: string;
    }
}

export const ContentBlock: React.FC<Props> = (props) => {
    const { content, customStyles, preview, bgImage } = props;
    const bgImageUrl = bgImage?.asset && urlForImage(bgImage.asset).url();
    return (
        <div style={bgImageUrl ? {
            backgroundImage: `url(${bgImageUrl})`,
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: ' no-repeat', /* Do not repeat the image */
            backgroundSize: 'cover', /* Resize the background image to cover the entire container */
        } : {}} className={`${content.customStyles ?? ''}`}>
            <PageContent elements={content.content} />
        </div>
    );
}