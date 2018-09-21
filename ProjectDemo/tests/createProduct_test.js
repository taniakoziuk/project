let ProductsPage = require("../page_objects/products.page");
let LoginPage = require("../page_objects/login.page");
let HeaderPage = require("../page_objects/header.page");

describe('Product creation', function() {
    it('New product should be created', async function() {

      let loginPage = new LoginPage();
      let prod = new ProductsPage();
      let headerPage = new HeaderPage();

      function randomNameNumber(){
        return Math.floor(Math.random() * 100);
      }

      let randomName = `Test Product + ${randomNameNumber()}`;

      await browser.restart();

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
      await prod.getProductNameField().sendKeys(randomName))();

      await allure.createStep("Click Product Family dropdown", async() =>
      await prod.getproductFamilyDropdown().click())();

      await allure.createStep("Input aqa in the search field", async() =>
      await prod.getInputSearchProductFamily().sendKeys("aqa"))();

      await prod.getAqaItem().click();

      await allure.createStep("click Save button", async() =>
      await prod.getSaveProductButton().click())();
      await browser.sleep(5000);

      let toast = await prod.getToastSuccess();
      expect(await toast.getText()).toEqual(`Product ${randomName} successfully created`);
    });
});
