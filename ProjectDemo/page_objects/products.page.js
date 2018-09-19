let HeaderPage = require("./header.page");
let Button = require("../controls/button");
let Input = require("../controls/input");
let Message = require("../controls/message");

let addProdLinkLocator = '//span[@class="btn gds-btn-icon gds-add-entity-icon"]';
let productNameFieldLocator = "#product-name";
let productFamilyDropdownLocator = '//button[@class="dropdown-toggle form-control multiselect-dropdown"]';
let inputSearchProductFamilyLocator = '//input[@class="form-control ng-untouched ng-pristine ng-valid"]';
let validationMessagePrFamilyLocator = ".edit-poduct-family-list .validation-message";
let saveProductButtonLocator = '//button[@class="btn gds-btn gds-btn-success"]';
let aqaItemLocator = ".dropdown-menu a span";
let toastSuccessCreationLocator ="div .toast-message";

class ProductsPage {
    constructor(){
        this.header = new HeaderPage();
        browser.waitForAngularEnabled(false);
    }

    getAddProductLink() {
        return new Button(element(by.xpath(addProdLinkLocator)), "Add Product button");
    }

    getProductNameField() {
        return new Input(element(by.css(productNameFieldLocator)), "Name input");
    }

    getproductFamilyDropdown() {
        return element(by.xpath(productFamilyDropdownLocator));
    }

    getInputSearchProductFamily() {
        return new Input(element(by.xpath(inputSearchProductFamilyLocator)), "Product family Search");
    }

    getValidationMessagePrFamily() {
        return new Message(element(by.css(validationMessagePrFamilyLocator)), "Error Message");
    }

    getSaveProductButton() {
        return new Button(element(by.xpath(saveProductButtonLocator)), "Save Product button");
    }

    getAqaItem() {
        return element(by.css(aqaItemLocator));
    }

    getToastSuccessCreation() {
        return new Message(element(by.css(toastSuccessCreationLocator)), "Successful creation toast");
    }
    
}

module.exports = ProductsPage;