import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} className="text-red-500 text-2xl">
          {project.name}
        </div>
      ))}
    </div>
  )
}
