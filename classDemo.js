"use strict";
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        this.ssn = ssn;
    }
    classDemo.prototype.getUserName = function (username) {
        return this.username = username;
    };
    classDemo.prototype.setUserName = function () {
        this.username = "hello";
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
