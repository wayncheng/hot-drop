"use strict";

// const fs = require("fs");

  describe(`API --------------------------------------------`, function() {
    let page;
    let response;

    before(async function() {
      page = await browser.newPage();

			let URL = 'https://che.ng';

      response = await page.goto(URL);
    });


//======================================================================
    
//====================================================================== 


    it("should return a 200 status", async function() {
      expect(response.status()).to.eql(200);
    });

    it("should have ...", async function() {
      const content = await page.$eval("#", e => e.innerHTML);
      expect(content).to.eql('whatever');
    });



    

    after(async function() {
      await page.close();
    });
  });


module.exports = api_test;
