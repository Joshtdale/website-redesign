import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: 'rjs62vz1',
    dataset: 'production',
    title: 'Portfolio Website',
    appVersion: '2023-11-19',
    basePath: '/studio',
    plugins: [deskTool()]
})

export default config