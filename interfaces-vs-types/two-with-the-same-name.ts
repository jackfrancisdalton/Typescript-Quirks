// 1. ============= Declaring two interfaces with the same name

interface A { a: number; }
interface A { b: string; } // We can define another interface with the exact same name!


// Notice how TypeScript merges interfaces with the same name automatically so only "bothInterface" here is valid
const justFirstInterface: A   = { a: 1 } 
const justSecondInterface: A  = { a: 1 } 
const bothInterface: A        = { a: 1, b: "hello" };



// 2. ============= Declaring two types with the same name

// Notice here how unlike interfaces types cannot be defined with the same name and do not automatically merge
type B = { a: number; };
type B = { b: string; };
