let HeaderPage = require("./header.page");

let addProdLinkLocator = "a.section-body__actions";
let productNameFieldLocator = "#product-name";
let productFamilyDropdownLocator = '//button[@class="dropdown-toggle form-control multiselect-dropdown"]';
let inputSearchProductFamilyLocator = '//input[@class="form-control ng-pristine ng-valid ng-touched"]';

class ProductsPage {
    constructor(){
        this.header = new HeaderPage();
        browser.waitForAngularEnabled(false);
    }

    getAddProductLink() {
        return element(by.css(addProdLinkLocator));
    }

    getProductNameFieldLocator() {
        return element(by.css(productNameFieldLocator));
    }

    getproductFamilyDropdown() {
        return element(by.xpath(productFamilyDropdownLocator));
    }

    getInputSearchProductFamily() {
        return element(by.xpath(inputSearchProductFamilyLocator));
    }
}

module.exports = ProductsPage;