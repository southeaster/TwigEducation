const assert = require('assert').strict;

const groupArrayElements = require('./index');


// Basic testing using nothing but Node's build in assertions
const tests = [
    noArguments_Returns_EmptyArray = () => {
        // Assemble
        const expected = [];
        // Act
        const actual = groupArrayElements();
        // Assert
        assert.deepStrictEqual(actual, expected, `equally_Divided_Return_All_Elements_Grouped: expected ${actual} to be ${expected}`);
    },

    equally_Divided_Return_All_Elements_Grouped = () => {
        // Assemble
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        // Act
        const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
        // Assert
        assert.deepStrictEqual(actual, expected, `equally_Divided_Return_All_Elements_Grouped: expected ${actual} to be ${expected}`);
    },

    notEqually_Divided_Return_All_Elements_Grouped = () => {
        // Assemble
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8]];
        // Act
        const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3);
        // Assert
        assert.deepStrictEqual(actual, expected, `notEqually_Divided_Return_All_Elements_Grouped: expected ${actual} to be ${expected}`);
    },

    groupSize_GreaterThan_ArraySize_Return_Whole_Array = () => {
        // Assemble
        const expected = [[1, 2, 3, 4]];
        // Act
        const actual = groupArrayElements([1, 2, 3, 4], 5);
        // Assert
        assert.deepStrictEqual(actual, expected, `groupSize_GreaterThan_ArraySize_Return_Whole_Array: expected ${actual} to be ${expected}`);
    },

    groupSize_Equal_ArraySize_Return_Whole_Array = () => {
        // Assemble
        const expected = [[1, 2, 3, 4]];
        // Act
        const actual = groupArrayElements([1, 2, 3, 4], 4);
        // Assert
        assert.deepStrictEqual(actual, expected, `groupSize_Equal_ArraySize_Return_Whole_Array: expected ${actual} to be ${expected}`);
    }
]

// Run all tests
tests.forEach((test) => {
    test();
});