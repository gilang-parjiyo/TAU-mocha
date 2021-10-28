const { equal } = require('assert');
// const mocha = require('mocha');
const assert = require('assert');
describe("Mathematical Operation - Test Suite", () => {
    var num1 = 10;
    var num2 = 10;

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