var Foo = /** @class */ (function () {
    function Foo() {
        var _this = this;
        this.property = "hello";
        this.annonymousFunc = function () {
            console.log('annonymousFunc:', _this.property);
        };
    }
    Foo.prototype.func = function () {
        console.log('func:', this.property);
    };
    return Foo;
}());
var foo = new Foo();
foo.func(); // Prints: hello
foo.annonymousFunc(); // prints: hello
// Quirk :
var func = foo.func, annonymousFunc = foo.annonymousFunc;
func(); // ❌ This will throw an error as `this` is not bound to the instance of Foo
annonymousFunc(); // ❌ This will throw an error as `this` is not bound to the instance of Foo
// 🧠 TAKEAWAY:
