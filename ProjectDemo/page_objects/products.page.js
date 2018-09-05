let HeaderPage = require("./header.page");

let addProdLinkLocator = "a.section-body__actions";
let productNameFieldLocator = "#product-name";
let productFamilyDropdownLocator = "dropdown-toggle form-control multiselect-dropdown";

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
        return element(by.css(productFamilyDropdownLocator));
    }

    
}

module.exports = ProductsPage;