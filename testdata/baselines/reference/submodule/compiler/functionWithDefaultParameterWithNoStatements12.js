//// [tests/cases/compiler/functionWithDefaultParameterWithNoStatements12.ts] ////

//// [functionWithDefaultParameterWithNoStatements12.ts]
var v: any[];

function foo(a = (v)) { }

function bar(a = (v)) {
}

//// [functionWithDefaultParameterWithNoStatements12.js]
var v;
function foo(a = (v)) { }
function bar(a = (v)) {
}
