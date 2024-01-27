// this will eventually be the dynamic page router
import { getPage } from "@/sanity/sanity-utils";
import Head from "next/head";
import RootLayout from "../layout";

type Props = {
    params: { page: string };
};

export default async function Page({ params }: Props) {
    const slug = params.page[0];
    const page = await getPage(slug);
    console.log(params.page)
    return (
        <>
            <head>
                <title>{page?.title}</title>
            </head>
                <div className="text-2xl text-red-500">
                    {page?.title}
                </div>

        </>
    )
}