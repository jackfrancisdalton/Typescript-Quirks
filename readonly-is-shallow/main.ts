
// 🌟 QUIRK: Readonly here will only apply to top level keys (a) and will not apply to nested child keys (b)
type NestedObject = Readonly<{ a: { b: number } }>;


// So if we define a nested object like this, we:
// - ❌ won't be able to change `a`
// - ✅ will be able to change `b`
const nestedObj: NestedObject = { a: { b: 2 } };
nestedObj.a = { b: 4 }; // ❌ 
nestedObj.a.b = 3;      // ✅



// In order to do a deep readonly we can use the utility type `ReadonlyDeep` from `type-fest`, or make our own like this:
type DeepReadonly<T> = Readonly<{
    [K in keyof T]: 
      // Is it a primitive? Then make it readonly
      T[K] extends (number | string | symbol) ? Readonly<T[K]> 
      // Is it an array of items? Then make the array readonly and the item as well
      : T[K] extends Array<infer A> ? Readonly<Array<DeepReadonly<A>>> 
      // It is some other object, make it readonly as well
      : DeepReadonly<T[K]>;
}>

// Now as a result we cannot assign b or a anymore:
const deepReadonlyObj: DeepReadonly<NestedObject> = { a: { b: 2 } };
deepReadonlyObj.a.b = 3;      // ❌
deepReadonlyObj.a = { b: 4 }; // ❌


// 🧠 TAKEAWAY:
// Readonly only applies to the top level keys of an object, not to nested keys.
// To make an object deeply readonly, you can use a utility type like `ReadonlyDeep` from `type-fest` or create your own recursive type.