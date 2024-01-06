import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'greentea',

  projectId: 'ckvf1x81',
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
