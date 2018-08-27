const expect  = require("chai").expect;

const defaultedGasSupplier = "British Gas";
const gasSupplier = "p[ng-if='ctrl.showGasInfo()']";
const defaultedElecSupplier = "E.ON";
const elecSupplier = "p[ng-if='ctrl.showElectricityInfo()']";
const fixedFilter = "#filters-tariff-type-fixed";
const variableFilter = "#filters-tariff-type-variable";

module.exports = {

    currentGasSupplierShouldBeDefaulted:function () {
        return expect(browser.element(gasSupplier).getText()).to.include(defaultedGasSupplier);
    },

    currentElectricitySupplierShouldBeDefaulted:function () {
        return expect(browser.element(elecSupplier).getText()).to.include(defaultedElecSupplier);
    },

    filterTariffType:function (value) {
        if(value == "fixed"){
            browser.click(fixedFilter);
        }
        else{
            browser.click(variableFilter);
        }
    }
}


