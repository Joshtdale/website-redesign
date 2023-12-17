import Link from "next/link"
import { getPages } from "@/sanity/sanity-utils"

export default async function NavBar () {
    const pages = await getPages()
    return (
        <nav>
            {pages.map((page, key) => (
                <Link key={key} href={page.slug}>
                    {page.title}
                </Link>
            ))}
        </nav>
    )
}