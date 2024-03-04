import { getPages, getProjects } from "@/sanity/sanity-utils"
// import {draftMode} from 'next/headers'
// export default async function Home() {
// 
  // const projects = await getProjects();

  // const pages = await getPages();

//   console.log(draftMode().isEnabled)
//   return (
//     <main className="text-white">
//       {projects.map((project) => (
//         <div key={project._id} className="text-red-500 text-2xl">
//           {project.name}
//         </div>
//       ))}
//       <h1>the pages are</h1>
//       {pages.map((page) => (
//         <div key={page._id} className="text-blue-500 text-2xl">
//           {page.title}
//         </div>
//       ))}
//     </main>
//   )
// }
import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'
import { sanityFetch } from "@/lib/sanity.fetch"
import PreviewDocumentsCount from "./Components/PreviewDocumentsCount"
import { query } from "./Components/DocumentsCount"

export default async function IndexPage() {
  const data = await sanityFetch<number>({ query, tags: ['post'] })
    const projects = await getProjects();

  const pages = await getPages();

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewDocumentsCount}
    >
      <main className="text-white">
        {projects.map((project) => (
          <div key={project._id} className="text-red-500 text-2xl">
            {project.name}
          </div>
        ))}
        <h1>the pages are</h1>
        {pages.map((page) => (
          <div key={page._id} className="text-blue-500 text-2xl">
            {page.title}
          </div>
        ))}
      </main>
    </LiveQuery>
  )
}