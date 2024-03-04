import { getPage } from "@/sanity/sanity-utils";
import { PageContent } from "../Components/pageContent";
import { headers } from 'next/headers';

type Props = {
    params: { page: string };
};

export default async function Page({ params }: Props) {
    const slug = params.page[0];
    const page = await getPage(slug);
    const header = headers();
    const previewData = header.previewData;
    console.log(previewData)
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