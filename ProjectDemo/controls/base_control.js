class BaseControl {

    constructor(protractorElement, controlName) {
        this.protractorElement = protractorElement;
        this.controlName = controlName;
    }

    async click() {
        await this.protractorElement.click();
    }

    async isPresent() {
        return this.protractorElement.isPresent();
    }

    async isDisplayed() {
        return this.protractorElement.isDisplayed();
    }
}

module.exports = BaseControl;