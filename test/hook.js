// const mocha = require('mocha');
describe("Mocha hook", () => {
    before("Execute before all tests", () => {
        console.log("Execute before all tests");
    })
    beforeEach("Execute before each test", () => {
        console.log("Execute before each test");
    })
    after("Execute after all tests", () => {
        console.log("Execute after all test ");
    })
    afterEach("Execute after each test", () => {
        console.log("Execute after each test")
    })
    it("Mocha hooktest", () => {
        console.log("Mocha - This is test for mocha hooks");
    })
})