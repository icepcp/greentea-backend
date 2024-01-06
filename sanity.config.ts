import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_PROJ_TITLE || "gemtology",

  // @ts-ignore
  projectId: process.env.SANITY_STUDIO_PROJ_ID || "a7vke4vt",
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
