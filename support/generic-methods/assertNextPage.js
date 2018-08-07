const expect = require('chai').expect;

const yourEnergyHeaderText = "Your energy";
const yourEnergyUseHeaderText = "Your energy usage"

module.exports = {

    hasLoaded: function (expectedPage) {

        switch (expectedPage.toLowerCase()) {
            case "your energy": expect(browser.getText(".main-heading").to.equal(yourEnergyHeaderText));
            break;
            case "your energy use": expect(browser.getText(".main-heading").to.equal(yourEnergyUseHeaderText));
            break;
        }
    }

}
