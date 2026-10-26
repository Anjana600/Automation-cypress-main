const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      pvgUrl:"http://172.30.40.143:8755/pretups-dqa-16/"
    },
    specPattern:'cypress/e2e/**/*.feature'
  },
  
});
