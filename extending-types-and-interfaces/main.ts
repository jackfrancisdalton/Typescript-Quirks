// 1. ============= Extending interfaces merges the values

interface Parent { a: number; }
interface Child extends Parent { a: number; b: string; }    // ✅ Here that we merge A from Parent & Child resulting in { a: number, b: string; }
interface InvalidChild extends Parent { a: string; }        // ❌ Here merging fails as due to the type mismatch

const validChild: Child = { a: 1, b: "hello" }; 



// 2. ============= Combing types intersects instead of extending

type ParentType = { y: number; x: number; };
type ChildType = ParentType & { x: string; }; 

// This results in the equivalent of the following type:
// type ChildType = {
//     y: number;
//     x: never;      <-- because number & string = never
// }


// We now have the issue that we never instantiate the type ChildType with a valid value despite the type being valid.
const A: ChildType = { y: 1 };               // ❌ this is not valid as `x` is not defined
const B: ChildType = { y: 1, x: undefined }; // ❌ This is not valid as `x` is never
const C: ChildType = { y: 1, x: null };      // ❌ This is not valid as `x` is never
const D: ChildType = { y: 1, x: 10 };        // ❌ This is not valid as `x` is never


