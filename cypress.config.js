const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },    
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://www.saucedemo.com/v1/',
    supportFile: 'cypress/support/e2e.js',
    stepDefinitions: 'cypress/e2e/step_definitions/*.js'
  },
  "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": false,
      "json": true
    }
});