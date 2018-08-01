const navigateTo = require('../../support/navigateTo');

//are british gas and eon default suppliers if you don't know?
//if you select to compare gas and you say yes to the pre payment meter question, then you will get the invalid tariff question on the price page
//if you select that you have you bill, then you will not get the "i don't know " option on supplier and you are asked to enter usage details and then to tariffs
//if you select that you don't have a bill but you know how much you are paying then you taken to tariffs
//select that you don't have a bill and you don't know how much you spend, then you are asked usage questions
//select that gas and elec come from different suppliers and toy are asked who supplies each
//



//Test one

describe('A journey where I do not have a bill and exercises all possible questions. Includes the use of the filter and edit features on the price page', function () {
    it('should return prices if I do not have a bill and I do not know my current supplier or spend', function () {

        navigateTo.landingPage();
        // yourSupplier.enterPostCode();
        // yourSupplier.findPostcode();
        // yourSupplier.doYouHaveYourBill("no");
        // yourSupplier.whatWouldYouLikeToCompare("gas and electricity");
        // yourSupplier.whoIsYourCurrentElectricitySupplier("dk"); //dk=don't know
        // yourSupplier.whoIsYourCurrentGasSupplier("dk"); //dk=don't know
        // yourSupplier.goToNextSection("your energy"); //asserts here that the next section is "your energy"
        // yourEnergy.doYouUseAPrePaymentMeter("no");
        // yourEnergy.doYouHaveAnEconomySevenMeter("no");
        // yourEnergy.howMuchDoYouCurrentlySpendOnElecticity("dk"); //dk=don't know
        // yourEnergy.howMuchDoYouCurrentlySpendOnGas("dk"); //dk=don't know
        // yourEnergy.goToNextSection("your energy use"); //asserts here that the next section is "your energy use"
        // yourEnergyUsage.howManyBedrommsDoYouHave("1-2");
        // yourEnergyUsage.howManyAdultsLiveThere("1-2");
        // yourEnergyUsage.whatIsTheMainSourceOfHeating("gas");
        // yourEnergyUsage.howDoYouLikeTheTempInsideYourHome("cosy");
        // yourEnergyUsage.howWellIsYourHomeInsulated("well wrapped");
        // yourEnergyUsage.whatIsTheMainSourceOfCooking("electricity");
        // yourEnergyUsage.howOfternIsSomeoneAtHome("evening and weekends");
        // yourEnergyUsage.goToNextSection("your preferences");//asserts here that the next section is "your preferences"
        // yourPreferences.whatTariff("all");
        // yourPreferences.howDoYouWantToPay("quarterly direct debit");
        // yourPreferences.enterEmailAddress();
        // yourPreferences.confirmUnderstanding();
        // yourPreferences.getPrices();
        // yourResults.currentGasSupplierShouldBeDefaulted(true);
        // yourResults.currentElectricitySupplierShouldBeDefaulted(true);
        // yourResults.filterTariffType("fixed");
        // yourResults.edit("details");
    })
})

