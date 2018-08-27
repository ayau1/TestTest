module.exports = (function customCommands() {

    browser.addCommand("sayHello", () => {
        console.log("hello!!");
    });
}());
