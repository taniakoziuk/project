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
let toastSuccessLocator ="div .toast-message";
let deletePrButnLocator = "//button [@class='btn gds-btn-icon gds-delete-icon']";
let confirmModalLocator = "confirmation-modal div.modal-dialog div.modal-content";
let deleteConfirmButtonLocator = "//button [@class='btn gds-btn gds-ml-1 gds-btn-danger']";

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

    getToastSuccess() {
        return new Message(element(by.css(toastSuccessLocator)), "Successful creation toast");
    }

    getDeletePrButn() {
        return new Button(element(by.xpath(deletePrButnLocator)), "Delete Product button");
    }
    
    getConfirmModal() {
        return new Message(element(by.css(confirmModalLocator)), "Confirmation Modal");
    }

    getDeleteConfirmButton() {
        return new Button(element(by.xpath(deleteConfirmButtonLocator)), "Delete confirmation button");
    }

    async waitForConfirmModalAvailable() {
        const modal = this.getConfirmModal();
 
        await browser.wait(protractor.ExpectedConditions.visibilityOf(modal), 5000);
     }
 
     async isConfirmModulVisible() {
         await this.waitForConfirmModalAvailable();
         return await this.getConfirmModal().isDisplayed()
        }
}

module.exports = ProductsPage;