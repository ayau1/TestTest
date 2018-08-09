const assertNextPage = require("./generic-methods/assertNextPage");

const prePaymentMeterNo = "label[for=prepayment-no]";
const prePaymentMeterYes = "label[for=prepayment-yes]";
const economySevenMeterNo = "label[for=economy-7-no]";
const economySevenMeterYes = "label[for=economy-7-yes]";
const currentElectricitySpendDk = "#electricity-dont-know-check";
const currentElecticitySpendPounds = "#electricity-current-spend";
const currentElectricityFrequency = "#electricity-current-spend-period";
const currentGasSpendDk = "#gas-dont-know-check";
const currentGasSpendPounds = "#gas-current-spend";
const currentGasFrequency = "#gas-current-spend-period";
const nextPage = "#goto-your-energy";

module.exports = {

    doYouUseAPrePaymentMeter:function (value) {
        if (value.toLowerCase() === "no"){
            browser.click(prePaymentMeterNo);
        }
        else browser.click(prePaymentMeterYes);

    },

    doYouHaveAnEconomySevenMeter:function (value) {
        if (value.toLowerCase() === "no"){
            browser.click(economySevenMeterNo);
        }
        else browser.click(economySevenMeterYes);
    },

    howMuchDoYouCurrentlySpendOnElecticity:function (value = "dk", frequency = "monthly") {
        if (value.toLowerCase() === "dk"){
            browser.click(currentElectricitySpendDk);
        }
        else {
            browser.setValue(currentElecticitySpendPounds, value);
            const frequencyField = $(currentElectricityFrequency);
            frequencyField.selectByValue(frequency);
        }
    },

    howMuchDoYouCurrentlySpendOnGas:function (value = "dk", frequency = "monthly") {
        if (value.toLowerCase() === "dk"){
            browser.click(currentGasSpendDk);
        }
        else {
            browser.setValue(currentGasSpendPounds, value);
            const frequencyField = $(currentGasFrequency);
            frequencyField.selectByValue(frequency);
        }
    },

    goToNextSection:function (expectedPage) {
        browser.click(nextPage);
        assertNextPage.hasLoaded(expectedPage);
    }
}
