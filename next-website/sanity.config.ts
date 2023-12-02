import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'rjs62vz1',
    dataset: 'production',
    title: 'Portfolio Website',
    appVersion: '2023-11-19',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config