const expect = require('chai').expect;
const pageHasLoaded = require("generic-methods/pageHasLoaded");

const postcode = "#your-postcode";
const findPostcode = "#find-postcode";
const doYouHaveYourBillYes = "#have-bill";
const doYouHaveYourBillNo = "#no-bill-label";
const compareBoth = "#compare-what-both";
const currentElectricitySupplierDk = "#electricity-supplier-dont-know";
const currentGasSupplierDk = "#gas-supplier-dont-know";
const nextPage = "#goto-your-supplier-details";
const yourEnergyHeaderText = "Your energy";

module.exports = {

    enterPostCode: function(postcodeVal) {
        browser.setValue(postcode, postcodeVal );
    },

    findPostcode: function () {
        browser.click(findPostcode);
    },

    doYouHaveYourBill:function (value){
        if (value.toLowerCase() === "yes")
        {browser.click(doYouHaveYourBillYes)}
        else
            browser.click(doYouHaveYourBillNo);
    },

    whatWouldYouLikeToCompare:function () {
        browser.click(compareBoth);
    },

    whoIsYourCurrentElectricitySupplier:function (value) {
        switch (value.toLowerCase()) {
            case value === "dk": browser.click(currentElectricitySupplierDk);
            break;
            case value === "":
        }
    },

    whoIsYourCurrentGasSupplier:function (value) {
        switch (value.toLowerCase()) {
            case value === "dK":
                browser.click(currentGasSupplierDk);
                break;
        }
    },

    goToNextSection:function (expectedPage) {
        browser.click(nextPage);
        pageHasLoaded(expectedPage);

    }


}
