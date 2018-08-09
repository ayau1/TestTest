const assertNextPage = require("./generic-methods/assertNextPage");

const oneToTwoBedrooms = "label[for=one-two-bedroom]";
const threeToFourBedrooms  = "label[for=three-four-bedroom]";
const fivePlusBedrooms = "label[for=five-plus-bedroom]";
const oneToTwoAdults = "#one-two-occupants";
const threeToFourAdults = "#three-four-occupants";
const fivePlusAdults = "#five-plus-occupants";
const mainSourceOfHeatingGas = "#gas-heat";
const mainSourceOfHeatingElectricity = "#electricity-heat";
const mainSourceOfHeatingOther = "#other-heat";
const likeTheTempCool = "#arctic";
const likeTheTempHot  = "#tropical";
const likeTheTempCosy = "#temperate";
const homeIsWaferThin = "#wafer-thin";
const homeIsWellWrapped = "#well-wrapped";
const homeIsAirtight = "#airtight";
const mainSourceCookingGas = "#gas-cooking";
const mainSourceCookingElectricity = "#electricity-cooking";
const mainSouceCookingOther = "#other-cooking";

module.exports = {

    howManyBedroomsDoYouHave:function (value) {
        switch (value) {
            case "1-2": browser.click(oneToTwoBedrooms);
            break;
            case "3-4": browser.click(threeToFourBedrooms);
            break;
            case "5+": browser.click(fivePlusBedrooms);
            break;
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
        }
    }
}
