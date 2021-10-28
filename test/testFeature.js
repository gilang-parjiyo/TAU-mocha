const assert = require('assert');
// describe("Mathematical Operation - Test Suite only", () => {
//     it.only("Addition two numbers", () => {
//         var num1 = 10;
//         var num2 = 10;

//         var operation = 10 + 10;
//         assert.equal(operation, 20);
//     });
//     it("Substraction two numbers", () => {
//         var num1 = 10;
//         var num2 = 10;

//         var operation = 10 - 10;
//         assert.equal(operation, 0);
//     });
//     it("Divison two numbers", () => {
//         var num1 = 10;
//         var num2 = 10;

//         var operation = 10 / 10;
//         assert.equal(operation, 1);
//     });
//     it("Multiplication two numbers", () => {
//         var num1 = 10;
//         var num2 = 10;

//         var operation = 10 * 10;
//         assert.equal(operation, 100);
//     });
// })

describe("Mathematical Operation - Test Suite skip", () => {
    it.skip("Addition two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 + 10;
        assert.equal(operation, 20);
    });
    it("Substraction two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 - 10;
        assert.equal(operation, 0);
    });
    it("Divison two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 / 10;
        assert.equal(operation, 1);
    });
    it("Multiplication two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 * 10;
        assert.equal(operation, 100);
    });
})

describe("Mathematical Operation - Test Suite Pending", () => {
    it("Addition two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 + 10;
        assert.equal(operation, 20);
    });
    it("Substraction two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 - 10;
        assert.equal(operation, 0);
    });
    it("Divison two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 / 10;
        assert.equal(operation, 1);
    });
    it("Multiplication two numbers", () => {
        var num1 = 10;
        var num2 = 10;

        var operation = 10 * 10;
        assert.equal(operation, 100);
    });
    it("This is pending test")
})