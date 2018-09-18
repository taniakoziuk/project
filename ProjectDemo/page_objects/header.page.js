let Button = require("../controls/button");
let Input = require("../controls/input");

let productsMenuLocator = "ul.navbar-nav li:nth-child(1) a";
let administrationMenuLocator = "ul.navbar-nav li:nth-child(2) a";

class HeaderPage {
    constructor(){
        
    }
    
    getProductsMenu() {
        return new Button(element(by.css(productsMenuLocator)), "Products header button");
    }

    getAdministrationMenu() {
        return new Button(element(by.css(administrationMenuLocator)), "Administration header button");
    }

    async waitForHeaderAvailable() {
       const btn = this.getAdministrationMenu();

       await browser.wait(protractor.ExpectedConditions.visibilityOf(btn), 15000);
    }

    async isHeaderVisible() {
        await this.waitForHeaderAvailable();
        return await this.getProductsMenu().isDisplayed()
        && await this.getAdministrationMenu().isDisplayed()
    }

}

module.exports = HeaderPage;