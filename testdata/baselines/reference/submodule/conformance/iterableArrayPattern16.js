//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern16.ts] ////

//// [iterableArrayPattern16.ts]
function fun(...[a, b]: [Bar, Bar][]) { }
fun(...new FooIteratorIterator);
class Bar { x }
class Foo extends Bar { y }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

class FooIteratorIterator {
    next() {
        return {
            value: new FooIterator,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

//// [iterableArrayPattern16.js]
function fun(...[a, b]) { }
fun(...new FooIteratorIterator);
class Bar {
    x;
}
class Foo extends Bar {
    y;
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
class FooIteratorIterator {
    next() {
        return {
            value: new FooIterator,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
