const waitForNextPage = require("./generic-methods/waitForNextPage");

const oneToTwoBedrooms = "label[for=one-two-bedroom]";
const threeToFourBedrooms  = "label[for=three-four-bedroom]";
const fivePlusBedrooms = "label[for=five-plus-bedroom]";
const oneToTwoAdults = "label[for=one-two-occupants]";
const threeToFourAdults = "label[for=three-four-occupants]";
const fivePlusAdults = "label[for=five-plus-occupants]";
const mainSourceOfHeatingGas = "label[for=gas-heat]";
const mainSourceOfHeatingElectricity = "label[for=electricity-heat]";
const mainSourceOfHeatingOther = "label[for=other-heat";
const likeTheTempCool = "label[for=arctic]";
const likeTheTempHot  = "label[for=tropical]";
const likeTheTempCosy = "label[for=temperate]";
const homeIsWaferThin = "label[for=wafer-thin]";
const homeIsWellWrapped = "label[for=well-wrapped]";
const homeIsAirtight = "label[for=airtight]";
const mainSourceCookingGas = "label[for=gas-cooking]";
const mainSourceCookingElectricity = "label[for=electricity-cooking]";
const mainSouceCookingOther = "label[for=other-cooking]";
const someoneAtHomeEveningsAndWeekends = "label[for=evenings-weekends]";
const someoneAtHomeHardlyEver = "label[for=hardly-ever];";
const someoneAtHomeMostOfTheTime = "label[for=most-time]";
const nextPage = "#goto-person-details-button";

module.exports = {

    howManyBedroomsDoYouHave:function (value) {
        switch (value) {
            case "1-2": browser.click(oneToTwoBedrooms);
            break;
            case "3-4": browser.click(threeToFourBedrooms);
            break;
            case "5+": browser.click(fivePlusBedrooms);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    howManyAdultsLiveThere:function (value) {
        switch (value) {
            case "1-2": browser.click(oneToTwoAdults);
            break;
            case "3-4": browser.click(threeToFourAdults);
            break;
            case "5+": browser.click(fivePlusAdults);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    whatIsTheMainSourceOfHeating:function (value) {
        switch (value.toLowerCase()) {
            case "gas": browser.click(mainSourceOfHeatingGas);
            break;
            case "electricity": browser.click(mainSourceOfHeatingElectricity);
            break;
            case "other": browser.click(mainSourceOfHeatingOther);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    howDoYouLikeTheTempInsideYourHome:function (value) {
        switch (value.toLowerCase()) {
            case "cool": browser.click(likeTheTempCool);
            break;
            case "hot": browser.click(likeTheTempHot);
            break;
            case "cosy": browser.click(likeTheTempCosy);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    howWellIsYourHomeInsulated:function (value) {
        switch (value.toLowerCase()) {
            case "wafer thin": browser.click(homeIsWaferThin);
            break;
            case "well wrapped": browser.click(homeIsWellWrapped);
            break;
            case "airtight": browser.click(homeIsAirtight);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    whatIsTheMainSourceOfCooking:function (value) {
        switch (value.toLowerCase()) {
            case "gas": browser.click(mainSourceCookingGas);
            break;
            case "electricity": browser.click(mainSourceCookingElectricity);
            break;
            case "other": browser.click(mainSouceCookingOther);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    howOftenIsSomeoneAtHome:function (value) {
        switch (value.toLowerCase()){
            case "hardly ever": browser.click(someoneAtHomeHardlyEver);
            break;
            case "evenings and weekends": browser.click(someoneAtHomeEveningsAndWeekends);
            break;
            case "most of the time": browser.click(someoneAtHomeMostOfTheTime);
            break;
            default: throw new Error("unknown value: " + value);
        }
    },

    goToNextSection:function (expectedPage) {
        browser.click(nextPage);
        waitForNextPage.toLoad(expectedPage);
    }
}
