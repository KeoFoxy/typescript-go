//// [tests/cases/conformance/esDecorators/classExpression/classSuper/esDecorators-classExpression-classSuper.4.ts] ////

//// [esDecorators-classExpression-classSuper.4.ts]
declare var dec: any;

declare class Base {
    static method(...args: any[]): number;
}

const method = "method";

(@dec
class C extends Base {
    static a = super.method();
    static b = super["method"]();
    static c = super[method]();
    static d = super.method``;
    static e = super["method"]``;
    static f = super[method]``;
});


//// [esDecorators-classExpression-classSuper.4.js]
const method = "method";
(
@dec
class C extends Base {
    static a = super.method();
    static b = super["method"]();
    static c = super[method]();
    static d = super.method ``;
    static e = super["method"] ``;
    static f = super[method] ``;
});
