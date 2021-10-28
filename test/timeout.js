// const { equal } = require('assert');
// const mocha = require('mocha');
const assert = require('assert');
describe("Mathematical Operation - Test Suite Timeout", function () {
    var num1 = 10;
    var num2 = 10;
    this.timeout(0.05); // test level timeout
    it("Addition two numbers", () => {
        var operation = num1 + num2;
        assert.equal(operation, 20);
    });
    it("Substraction two numbers", () => {

        var operation = num1 - num2;
        assert.equal(operation, 0);
    });
    it("Divison two numbers", () => {

        var operation = num1 / num2;
        assert.equal(operation, 1);
    });
    it("Multiplication two numbers", () => {

        var operation = num1 * num2;
        assert.equal(operation, 100);
    });
})
describe("Mathematical Operation - Test Suite TestCase Timeout", function () {
    var num1 = 10;
    var num2 = 10;

    it("Addition two numbers", (done) => {
        this.timeout(500); // test level timeout
        setTimeout(done, 5000)
        var operation = num1 + num2;
        assert.equal(operation, 20);
    });
    it("Substraction two numbers", () => {

        var operation = num1 - num2;
        assert.equal(operation, 0);
    });
    it("Divison two numbers", () => {

        var operation = num1 / num2;
        assert.equal(operation, 1);
    });
    it("Multiplication two numbers", () => {

        var operation = num1 * num2;
        assert.equal(operation, 100);
    });
})

describe("Mathematical Operation - Test Suite Hook Timeout", function () {
    beforeEach(function (done) {
        this.timeout(500) // hook levet test timeout
        setTimeout(done, 3000)
    })
    var num1 = 10;
    var num2 = 10;

    this.timeout()
    it("Addition two numbers", () => {

        var operation = num1 + num2;
        assert.equal(operation, 20);
    });
    it("Substraction two numbers", () => {

        var operation = num1 - num2;
        assert.equal(operation, 0);
    });
    it("Divison two numbers", () => {

        var operation = num1 / num2;
        assert.equal(operation, 1);
    });
    it("Multiplication two numbers", () => {

        var operation = num1 * num2;
        assert.equal(operation, 100);
    });
})