import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'Danube DEMO Local',
  logicalId: 'danube-demo-local-1',
  repoUrl: 'https://github.com/acme/website',
  checks: {
   activated: true,
   muted: false,
    runtimeId: '2024.02',
   frequency: Frequency.EVERY_5M,
    //  locations: ['us-east-1', 'eu-west-1'],
    privateLocations: ['paulas-macbook-pro'],
   tags: ['website', 'api'],
   checkMatch: '**/__checks__/**/*.check.ts',
   ignoreDirectoriesMatch: [],
   browserChecks: {
     frequency: Frequency.EVERY_10M,
     testMatch: '**/__checks__/**/*.spec.ts',
   },
 },
 cli: {
   runLocation: 'eu-west-1',
 }
})