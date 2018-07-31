
describe('a simple test to navigate to www.google.com', function () {
    it('should return www.google.com', function () {
        browser.url('https://www.google.com');
        browser.pause(5000);

    })

})