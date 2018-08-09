const landingPageUrl = "https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TSTT&EnergyWhiteRedesign=EnergyWhiteRedesignDisplayed";

module.exports = {

        landingPage: function() {
            browser.url(landingPageUrl);
        },

}

