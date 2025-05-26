// 1 ============= Declaring two interfaces with the same name

interface A { a: number; }
interface A { b: string; } // We can define another interface with the exact same name!


// Notice how TypeScript merges interfaces with the same name automatically so only {a: number, b: string} is valid
const justFirstInterface: A   = { a: 1 }                // ❌ This is not valid as `b` is missing
const justSecondInterface: A  = { a: 1 }                // ❌ This is not valid as `a` is missing
const bothInterface: A        = { a: 1, b: "hello" };   // ✅ This is valid as it contains both properties from the merged interfaces



// 2. ============= Declaring two types with the same name

// Notice here how unlike interfaces types cannot be defined with the same name catching this issue at ts compile time/lint
type B = { a: number; };
type B = { b: string; };
