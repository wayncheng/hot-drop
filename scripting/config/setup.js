const puppeteer = require("puppeteer"); // headless chrome
const { expect } = require("chai");
const _ = require("lodash");
const constants = require("./constants");
const globalVariables = _.pick(global, ["browser", "expect", "constants"]);

// puppeteer options
const opts = {
  // headless: true,
  headless: false,
  slowMo: 50,
  timeout: 30000,
  ignoreHTTPSErrors: true,
  // args: ["--incognito"],
};

// expose variables
before(async function() {
  global.expect = expect;
  
  
  global.browser = await puppeteer.launch(opts);
  
  global.constants = constants;
});

// close browser and reset global variables
after(function() {
  global.browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
  global.constants = globalVariables.constants;
});
