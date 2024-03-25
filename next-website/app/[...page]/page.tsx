import { getPage } from "@/sanity/sanity-utils";
import { PageContent } from "../Components/pageContent";
import { headers } from 'next/headers';
import Head from "next/head";

type Props = {
    params: { page: string };
};

export function generateMetadata(title: string) {
    return {
        title: `Josh Dale | ${title}`
    };
}

export default async function Page({ params }: Props) {
    const slug = params.page[0];
    const page = await getPage(slug);
    const header = headers();
    const previewData = header.previewData;
    let metadata = null; // Initialize metadata variable

    if (page.title) {
        metadata = generateMetadata(page.title); // Create metadata object
    }
    return (
        <>
         {/* Set page title in the document head if metadata exists */}
         {metadata && (
                <head>
                    <title>{metadata.title}</title>
                </head>
            )}
            <div className="text-2xl text-red-500">
                {page?.title}
            </div>
            {<PageContent elements={page?.pageElements} />}
            {/* {previewData() } */}

        </>
    )
}