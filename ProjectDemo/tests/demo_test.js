let LoginPage = require("../page_objects/login.page");

describe('home page', function() {
    it('should open home page', async function() {

      let loginPage = new LoginPage();

      await allure.createStep("Open login page", async() =>
      await loginPage.open())();
      
      let productsPage = await loginPage.login("taniakoziuk@gmail.com", "Lo-5+G-bAM*");
      
      expect(await productsPage.header.isHeaderVisible()).toEqual(true);
    });
  });