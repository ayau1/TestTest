const expect = require('chai').expect;

const yourEnergyHeaderText = "Your energy";

module.exports = {

    hasLoaded: function (expectedPage) {

        switch (expectedPage.toLowerCase()) {
            case "your energy": expect(browser.getText(".main-heading").to.equal(yourEnergyHeaderText));
            break;
        }
    }

}
