const assertNextPage = require("./generic-methods/assertNextPage");

const postcode = "#your-postcode";
const findPostcode = "#find-postcode";
const doYouHaveYourBillYes = "#have-bill";
const doYouHaveYourBillNo = "#no-bill-label";
const compareBoth = "#compare-both-label";
const currentElectricitySupplierDk = "label[for=electricity-supplier-dont-know";
const currentGasSupplierDk = "label[for=gas-supplier-dont-know]";
const nextPage = "#goto-your-supplier-details";

module.exports = {

    enterPostCode: function(postcodeVal) {
        console.log("entering postcode" + postcodeVal);
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
        browser.pause(10000);
        browser.click(compareBoth);
    },

    whoIsYourCurrentElectricitySupplier:function (value) {
        switch (value.toLowerCase()) {
            case "dk": browser.click(currentElectricitySupplierDk);
            break;
            case "":
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    whoIsYourCurrentGasSupplier:function (value) {
        switch (value.toLowerCase()) {
            case "dk":browser.click(currentGasSupplierDk);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    goToNextSection:function (expectedPage) {
        browser.click(nextPage);
        assertNextPage.hasLoaded(expectedPage);

    }


}
