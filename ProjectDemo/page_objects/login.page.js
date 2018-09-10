let ProductsPage = require("./products.page");

let loginButtonLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passwordInputLocator = "#userPassword";
let sinnInButtonLocator = ".iframe-wrap .login-button";
let toastErrorLocator = '//div[@class="toast toast-error"]';

class LoginPage {
    constructor(){

    }

getLoginButton() {
    return element(by.css(loginButtonLocator));
}

getEmailinput() {
    return element(by.css(emailInputLocator));
}

getPasswordInput() {
    return element(by.css(passwordInputLocator));
}

getSignInButton() {
    return element(by.css(sinnInButtonLocator));
}

getToastError() {
    return element(by.xpath(toastErrorLocator));
}

async open() {
    await browser.get('http://eds_university.eleks.com');

    return this;
}

async login(email, pass) {
    await this.getLoginButton().click();
    await this.getEmailinput().sendKeys(email);
    await this.getPasswordInput().sendKeys(pass);
    await this.getSignInButton().click();

    return new ProductsPage();
}

}

module.exports = LoginPage;