let headerText = "";
const selector = ".main-heading";
const interstitialPage = ".interstitial-content";

module.exports = {

    toLoad: function (expectedPage) {
        if (expectedPage.toLowerCase() === "prices"){
            browser.waitUntil(function () {
                return browser.isVisible(interstitialPage) === false;
            }, 20000, "expected price to load but it didn't");
        }
        else {
            switch (expectedPage.toLowerCase()) {
                case "your energy": headerText = "your energy";
                    break;
                case "your energy usage": headerText = "your energy usage";
                    break;
                case "your preferences": headerText = "your preferences";
                    break;
                default: throw new Error("unknown value: " + expectedPage);
            };

            browser.waitUntil(function () {
                //return browser.getText(selector) === headerText
                return browser.element(selector).getText().toLowerCase() === headerText;
            },10000,"expected text to be " + headerText + " but it was different");
        }
    },
}

