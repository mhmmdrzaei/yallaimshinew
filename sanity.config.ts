import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure';
import { myStructure } from "./sanity/structure";
import {schemaTypes} from './sanity/schemas'
import {visionTool} from '@sanity/vision';


const config = defineConfig({
projectId: '0btnnkz2',
dataset: 'production',
title: 'Yalla Imshi',
apiVersion: '2024-05-11',
basePath: '/admin',
plugins: [structureTool({structure:myStructure}),visionTool()],
schema: {
  types: schemaTypes,
},

})

export default config;