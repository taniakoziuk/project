let ProductsPage = require("../page_objects/products.page");
let LoginPage = require("../page_objects/login.page");
let HeaderPage = require("../page_objects/header.page");

describe('Product creation', function() {
    it('should not create product without Product Family', async function() {

      let loginPage = new LoginPage();
      let prod = new ProductsPage();
      let headerPage = new HeaderPage();

      await allure.createStep("Open login page", async() =>
      await loginPage.open())();
      
      await allure.createStep("Input credentials", async() =>
      await loginPage.login("taniakoziuk@gmail.com", "Lo-5+G-bAM*"))();
      await browser.sleep(5000);
      
      await allure.createStep("click Administration button", async() =>
      await headerPage.getAdministrationMenu().click())();
      await browser.sleep(5000);

      await allure.createStep("click Add new product button", async() =>
      await prod.getAddProductLink().click())();

      await allure.createStep("Input Product name", async() =>
      await prod.getProductNameField().sendKeys("Product 2 TaniaTest"))();
      await browser.sleep(5000);

      await allure.createStep("click Save button", async() =>
      await prod.getSaveProductButton().click())();
      await browser.sleep(5000);

      let test = await element(by.css(".edit-poduct-family-list .validation-message"));

      expect(test.isDisplayed()).toBe(false);

    });
  });