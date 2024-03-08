import { getPage } from "@/sanity/sanity-utils";
import { PageContent } from "../Components/pageContent";
import { headers } from 'next/headers';

type Props = {
    params: { page: string };
};

export function generateMetadata(page) {
    console.log(page)
    return {
        title: {page}
    }
}


export default async function Page({ params }: Props) {
    const slug = params.page[0];
    const page = await getPage(slug);
    const header = headers();
    const previewData = header.previewData;
    // generateMetadata({page})
    generateMetadata({page.title})
        console.log(page)
    return (
        <>
            <div className="text-2xl text-red-500">
                {page?.title}
            </div>
            {<PageContent elements={page?.pageElements} />}
            {/* {previewData() } */}

        </>
    )
}