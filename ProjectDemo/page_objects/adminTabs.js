let Button = require("../controls/button");

let productsTabLocator = ".tab-navbar__wrapper .container li:nth-child(1)";
let criteriaSetTabLocator = ".tab-navbar__wrapper .container li:nth-child(2)";
let areasTabLocator = ".tab-navbar__wrapper .container li:nth-child(3)";
let categoriesTabLocator = ".tab-navbar__wrapper .container li:nth-child(4)";
let criteriaTabLocator = ".tab-navbar__wrapper .container li:nth-child(5)";
let modulesTabLocator = ".tab-navbar__wrapper .container li:nth-child(6)";

class AdminTabs {
    constructor(){

    }

    getProductsTabButton() {
        return new Button(element(by.css(productsTabLocator)), "Products Tab");
    }

    getCriteriaSetTabButton() {
        return new Button(element(by.css(criteriaSetTabLocator)), "Criteria Set Tab");
    }

    getAreasTabButton() {
        return new Button(element(by.css(areasTabLocator)), "Areas Tab");
    }

    getCategoriesTabButton() {
        return new Button(element(by.css(categoriesTabLocator)), "Categories Tab");
    }

    getCriteriaTabButton() {
        return new Button(element(by.css(criteriaTabLocator)), "Criteria Tab");
    }

    getModulesTabButton() {
        return new Button(element(by.css(modulesTabLocator)), "Modules Tab");
    }

}
