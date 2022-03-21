"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberchecker = function (num1) {
    if (isNaN(num1) === false && num1 > 0) {
        return num1;
    }
    else {
        return 0;
    }
};
var stringchecker = function (string1) {
    if (typeof string1 == 'string') {
        return string1;
    }
    else {
        return null;
    }
};
exports.default = { numberchecker: numberchecker, stringchecker: stringchecker };
