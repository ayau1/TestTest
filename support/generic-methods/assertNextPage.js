const expect = require('chai').expect;

let headerText = "";
const selector = ".main-heading";

module.exports = {

    hasLoaded: function (expectedPage) {

        switch (expectedPage.toLowerCase()) {
            case "your energy": headerText = "Your energy";
                break;
            case "your energy usage": headerText = "Your energy usage";
                break;
        };

        browser.waitUntil(function () {
            return browser.getText(selector) === headerText
        },10000,"expected text to be " + headerText + " but it was different");
    },
}
