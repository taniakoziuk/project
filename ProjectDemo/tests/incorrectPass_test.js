let LoginPage = require("../page_objects/login.page");

describe('Login with incorrect password', function() {
    it('should not open home page, error should appear', async function() {

      let loginPage = new LoginPage();

      await allure.createStep("Open login page", async() =>
      await loginPage.open())();
      
      await allure.createStep("Enter login and password", async() =>
      await loginPage.login("taniakoziuk@gmail.com", "Lo-5+G-"))();
            
      browser.wait(async function(){
        return await element(by.xpath('//div[@class="toast toast-error"]')).isDisplayed();
        }, 5000);

        let toastError = loginPage.getToastError();
      expect(await toastError.isDisplayed()).toBe(true);
    });
  });