let LoginPage = require("../page_objects/login.page");

describe('login with wrong pass', function() {
    it('should not login', async function() {
        await loginPage.open();
        let productsPage = await loginPage.login("taniakoziuk@gmail.com", "Lo-5+G");
        
        expect(await productsPage.header.isHeaderVisible()).toEqual(true);

    });
});