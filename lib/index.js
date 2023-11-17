"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.success = function (msg) {
        console.log("%c ".concat(msg), "color: green; font-weight: bold");
    };
    Log.error = function (msg) {
        console.log("%c ".concat(msg), "color: red; font-weight: bold");
    };
    Log.info = function (msg) {
        console.log("%c ".concat(msg), "color: blue; font-weight: bold");
    };
    return Log;
}());
exports.Log = Log;
