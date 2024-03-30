// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
export const PAGE_QUERY = groq`*[_type == 'page']{
    _id,
    _createdAt,
    title,
    'slug': slug.current,
}`

import { Project } from '@/types/project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { Page } from '@/types/page';

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(

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

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(

        groq`*[_type == 'project' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            content

        }`,
        { slug }

    );
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(

        groq`*[_type == 'page']{
            _id,
            _createdAt,
            title,
            'slug': slug.current,
        }`

    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(

        groq`*[_type == 'page' && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            'slug': slug.current,
            ...
        }`,
        { slug }

    );
}