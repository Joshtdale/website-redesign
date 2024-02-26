import { getPage } from "@/sanity/sanity-utils";
import { PageContent } from "../Components/pageContent";

type Props = {
    params: { page: string };
};

export default async function Page({ params }: Props) {
    const slug = params.page[0];
    const page = await getPage(slug);
    console.log(page?.pageElements)
    return (
        <>
            <div className="text-2xl text-red-500">
                {page?.title}
            </div>
            {<PageContent elements={page?.pageElements} />}

        </>
    )
}