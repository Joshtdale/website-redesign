import { getPages, getProjects } from "@/sanity/sanity-utils"

export default async function Home() {

  const projects = await getProjects();

  const pages = await getPages();

  console.log(pages)
  return (
    <main>
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
  )
}
