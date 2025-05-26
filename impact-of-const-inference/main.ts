// 1. ============= Using `as const` inference restricts values from the primative type, to only the defined values
const x = { a: 1 };          
const y = { a: 1 } as const; // changes type to { a : 1 } instead of { a: number }

// As you'd expect with the type of `x` being { a: number } we can assign any number to `a`
const a: typeof x = { a: 1 };          // ✅ This is valid as `a` can be any number
const b: typeof x = { a: 2 };          // ✅ This is valid as `a` can be any number

// 🌟 QUIRK: with `y` being { a: 1 } we can only assign the value 1 to `a`
const c: typeof y = { a: 1 };          // ✅ This is valid as `a` is 1
const d: typeof y = { a: 2 };          // ❌ This is not valid as `a` can only be 1



// 2. ================ We can also apply this to arrays, but note we get some interesting behaviour
const tuple = [1, 2] as const; // results in: readonly [1, 2]
const array = [1, 2];          // result in:  number[]


const tupleA: typeof tuple = [1, 2];     // ✅ Valid as the tuple can only be [1, 2]
const tupleB: typeof tuple = [1, 3];     // ❌ Invalid as 3 is not allowed in the tuple
const tupleC: typeof tuple = [2, 1];     // ❌ Invalid as the order of the tuple matters
const tupleD: typeof tuple = [1, 2, 1];  // ❌ Invalid as the tuple can only be exactly [1, 2]

const arrayA: typeof array = [1, 2];     // ✅ This is valid as the array can be any number[]
const arrayB: typeof array = [1, 3];     // ✅ This is valid as the array can be any number[]
const arrayC: typeof array = [1, 2, 1];  // ✅ This is valid as the array can be any number[]


// 🧠 TAKEAWAY:
// - Using `as const` inference restricts the values of a variable to only the defined values, which can be useful for constants.