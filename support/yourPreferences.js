const waitForNextPage = require("./generic-methods/waitForNextPage");

const fixedTariffs = "label[for=pre-select-fixed]";
const varibleTariffs = "label[for=pre-select-variable]";
const allTariffs = "label[for=pre-select-all]";
const interestedInByQuarterlyDirectDebit = "label[for=pre-select-payment-quarterly]";
const interestedInMonthlyDirectDebit = "label[for=pre-select-payment-monthly]";
const interestedInOnReceiptOfBill = "pre-select-payment-onbill";
const interestedInAllPaymentTypes = "pre-select-payment-all";
const emailAddress = "#Email";
const confirmUnderstanding = "#terms-label";
const nextPage = "#email-submit";

module.exports = {

    whatTariff:function (value) {
        switch (value.toLowerCase()) {
            case "all": browser.click(allTariffs);
            break;
            case "fixed": browser.click(fixedTariffs);
            break;
            case "variable": browser.click(varibleTariffs);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    howDoYouWantToPay:function (value) {
        switch (value.toLowerCase()) {
            case "quarterly direct debit": browser.click(interestedInByQuarterlyDirectDebit);
            break;
            case "monthly direct debit": browser.click(interestedInMonthlyDirectDebit);
            break;
            case "on receipt of bill": browser.click(interestedInOnReceiptOfBill);
            break;
            case "all payment types": browser.click(interestedInAllPaymentTypes);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    enterEmailAddress:function (value) {
         browser.setValue(emailAddress,value);
    },

    confirmUnderstanding:function () {
        browser.click(confirmUnderstanding);
    },

    goToNextSection:function (expectedPage) {
        browser.click(nextPage);
        waitForNextPage.toLoad(expectedPage);
    }
}
