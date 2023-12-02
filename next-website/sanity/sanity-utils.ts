import { createClient, groq } from 'next-sanity'

export async function getProjects() {
    const client = createClient({
        projectId: 'rjs62vz1',
        dataset: 'production',
        apiVersion: '2023-11-19'
    })
    return client.fetch(

        groq`*[_type == 'project']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            content

        }`

    )
}
