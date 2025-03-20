//// [tests/cases/compiler/unusedImports4.ts] ////

//// [file1.ts]
export class Calculator {
    handleChar() {}
}

export function test() {

}

export function test2() {

}

//// [file2.ts]
import {Calculator, test, test2} from "./file1"

var x = new Calculator();
x.handleChar();
test2();

//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.test = test;
exports.test2 = test2;
class Calculator {
    handleChar() { }
}
exports.Calculator = Calculator;
function test() {
}
function test2() {
}
//// [file2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file1_1 = require("./file1");
var x = new file1_1.Calculator();
x.handleChar();
(0, file1_1.test2)();
