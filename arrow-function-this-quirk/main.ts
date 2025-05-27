class Foo {
    property = "hello";

    func() {
        console.log('func:', this.property);
    }

    annonymousFunc = () => {
        console.log('annonymousFunc:', this.property);
    }
}

// ✅ When we call the functions directly they'll work just fine!
const foo = new Foo();
foo.func();           // func: hello
foo.annonymousFunc(); // annonymousFunc: hello


// 🌟 QUIRK: if we were to extract the functions, we get different behaviour as the arrow function remembers this, but the standard function does not!
const { func, annonymousFunc } = foo;
func();               // ❌  func: undefined (this is not bound to the instance of Foo)
annonymousFunc();     // ✅  annonymousFunc: hello (this is bound to the instance of Foo due to the arrow function syntax)


// 🧠 TAKEAWAY:
// - Arrow functions do not have their own `this` context, they inherit it from the surrounding scope.
// - Regular functions have their own `this` context, which can lead to unexpected behaviour if not bound correctly.
