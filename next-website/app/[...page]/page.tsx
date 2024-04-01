import { getPage } from "@/sanity/sanity-utils";
import { PageContent } from "../Components/pageContent";
import { headers } from 'next/headers';
import Layout from "../layout";
import { loadQuery } from "@/lib/store";
import { PAGE_QUERY } from "@/lib/queries";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PagePreview from "../Components/PagePreview";

export function generateMetadata(title: string) {
    return {
        title: `${title} | Josh Dale`
    };
}

export default async function Page() {
    const page = await loadQuery<SanityDocument[]>(PAGE_QUERY, {}, {
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    });

    let metadata = null; // Initialize metadata variable

    if (page?.data?.title) {
        metadata = generateMetadata(page?.data?.title); // Create metadata object
    }

    console.log(draftMode().isEnabled)
    console.log(page.data)
    return (
        <Layout>

            {draftMode().isEnabled ? (
                <PagePreview page={page} />
            ) : (
                <>
                    {/* Set page title in the document head if metadata exists */}
                    {metadata && (
                        <head>
                            <title>{metadata.title}</title>
                        </head>
                    )}
                    <div className="text-2xl text-red-500">
                        {page?.data?.title}
                    </div>
                    {<PageContent elements={page?.data?.pageElements} />}
                    {/* {previewData() } */}
                </>
            )}
        </Layout>
    )
}

// type Props = {
//     params: { page: string };
// };

// export function generateMetadata(title: string) {
//     return {
//         title: `${title} | Josh Dale`
//     };
// }

// export default async function Page({ params }: Props) {
//     const slug = params.page[0];
//     // const page = await getPage(slug);
//     const page = await loadQuery<SanityDocument[]>(PAGE_QUERY);
//     const header = headers();
//     const previewData = header.previewData;
//     let metadata = null; // Initialize metadata variable

//     // if (page.title) {
//     //     metadata = generateMetadata(page.title); // Create metadata object
//     // }
//     return (
// <Layout>
//  {/* Set page title in the document head if metadata exists */}
//  {/* {metadata && (
//         <head>
//             <title>{metadata.title}</title>
//         </head>
//     )} */}
//     <div className="text-2xl text-red-500">
//         {page?.title}
//     </div>
//     {<PageContent elements={page?.pageElements} />}
//     {/* {previewData() } */}

// </Layout>
//     )
// }