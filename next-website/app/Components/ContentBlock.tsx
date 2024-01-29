import { PageContent } from "./pageContent"
// import { type PageElementsSchemaUnion } from "../_schemas/landingPage"
import { type z } from "zod"
import { urlForImage } from "ussf-studio/lib/image";

type Props = {
    _type: string;
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
    // if (_ref) {
    //     const preview = draftMode().isEnabled
    //         ? { token: env.SANITY_API_READ_TOKEN }
    //         : undefined;
    //     console.log('Found a document _ref; fetching document');
    //     const data = await getCachedClient(preview)(refQuery, { _ref }) as unknown;
    //     console.log('_ref data:', data);
    // }
    return (
        <div style={bgImageUrl ? {
            backgroundImage: `url(${bgImageUrl})`,
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: ' no-repeat', /* Do not repeat the image */
            backgroundSize: 'cover', /* Resize the background image to cover the entire container */
        } : {}} className={`${customStyles ?? ''}`}>
            <PageContent {...{ content, preview }} />
        </div>
    );
}