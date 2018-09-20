let LoginPage = require("../page_objects/login.page");

describe('Login with incorrect password', function() {
    it('should not open home page, error should appear', async function() {

      let loginPage = new LoginPage();

      await browser.restart();

      await allure.createStep("Open login page", async() =>
      await loginPage.open())();
      
      await allure.createStep("Enter login and password", async() =>
      await loginPage.login("taniakoziuk@gmail.com", "Lo-5+G-"))();

      await browser.sleep(5000);
            
      let toastError = await loginPage.getToastError();
        
      expect(await toastError.isDisplayed()).toEqual(true);
    });
  });