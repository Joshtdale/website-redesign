import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'
import { presentationTool } from "sanity/presentation";


export default defineConfig({
    projectId: 'rjs62vz1',
    dataset: 'production',
    title: 'Portfolio Website',
    apiVersion: '2023-11-19',
    basePath: '/studio',
    plugins: [
        deskTool(),
        presentationTool({
            previewUrl: {
              draftMode: {
                enable: '/api/draft',
              },
            },
          }),],
    schema: { types: schemas }
})


// export default config config