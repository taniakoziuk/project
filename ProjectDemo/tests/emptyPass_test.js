let LoginPage = require("../page_objects/login.page");

describe('login with empty pass', function() {
    it('should not login', async function() {
        let loginPage = new LoginPage();

        await browser.restart();
        
        await allure.createStep("Open login page", async() => 
        await loginPage.open())();

        await allure.createStep("Click login button", async() =>
        await loginPage.getLoginButton().click())();

        await allure.createStep("enter email", async() =>
        await loginPage.getEmailinput().sendKeys("taniakoziuk@gmail.com"))();

        await allure.createStep("click Sign In button", async() =>
        await loginPage.getSignInButton().click())();
        
        let signInBtn = element(by.css(".iframe-wrap .login-button"));
        expect(await signInBtn.isEnabled()).toBe(false);

    });
});