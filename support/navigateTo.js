const landingPageUrl = "https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TSTT";

module.exports = {

        landingPage: function() {
            browser.url(landingPageUrl);
        },

}

