import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'stmp_sanity',

  projectId: '6ymwnjbz',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  // plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
