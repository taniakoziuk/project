let ProductsPage = require("./products.page");
let Button = require("../controls/button");
let Input = require("../controls/input");

let loginButtonLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passwordInputLocator = "#userPassword";
let sinnInButtonLocator = ".iframe-wrap .login-button";
let toastErrorLocator = 'div.toast.toast-error';

class LoginPage {
    constructor(){

    }

getLoginButton() {
    return new Button(element(by.css(loginButtonLocator)), "Login button");
}

getEmailinput() {
    return new Input(element(by.css(emailInputLocator)), "Email input");
}

getPasswordInput() {
    return new Input(element(by.css(passwordInputLocator)), "Password input");
}

getSignInButton() {
    return new Button(element(by.css(sinnInButtonLocator)), "Sign in button");
}

getToastError() {
    return element(by.css(toastErrorLocator));
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

// async waiting () {
//     await browser.wait(async function(){
//     return await element(by.css('div.toast.toast-error')).isDisplayed();
//     }, 5000);
// }

}

module.exports = LoginPage;