//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames6_ES5.ts] ////

//// [computedPropertyNames6_ES5.ts]
var p1: number | string;
var p2: number | number[];
var p3: string | boolean;
var v = {
    [p1]: 0,
    [p2]: 1,
    [p3]: 2
}

//// [computedPropertyNames6_ES5.js]
var p1;
var p2;
var p3;
var v = {
    [p1]: 0,
    [p2]: 1,
    [p3]: 2
};
