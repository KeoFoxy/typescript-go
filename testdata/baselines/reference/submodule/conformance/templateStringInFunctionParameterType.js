//// [tests/cases/conformance/es6/templates/templateStringInFunctionParameterType.ts] ////

//// [templateStringInFunctionParameterType.ts]
function f(`hello`);
function f(x: string);
function f(x: string) {
    return x;
}

//// [templateStringInFunctionParameterType.js]
function f(x) {
    return x;
}
