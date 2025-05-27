
// 🌟 Quirk: we can define a readonly "brand" (as in branding a horse) to a type to prevent accidental assignment of values of the same type but different meaning.
type Brand<K, T> = K & { readonly __brand: T };
type UserId    = Brand<string, "User">;
type ProductId = Brand<string, "Product">;

// here we brand string ids as either UserId or ProductId
function mkUserId(id: string): UserId { return id as UserId; }
function mkProductId(id: string): ProductId { return id as ProductId; }


// That way when we want to use these ids we can ensure that we do not accidentally mix them up, as they are now distinct types.
function fetchUser(id: UserId) { 
    console.log(`Fetching user with id: ${id}`);
}

function fetchProduct(id: ProductId) { 
    console.log(`Fetching product with id: ${id}`);
}

const uid = mkUserId("u_123");
const pid = mkProductId("p_456");

fetchUser(uid);      // ✅ works fine as it has the required type of brand
fetchProduct(uid);   // ❌ Error: UserId not assignable to ProductId

// When we console log the ids we only see the string, as the brand is not part of the runtime value, but only part of the type system.
console.log(uid);    // prints: u_123
console.log(pid);    // prints: p_456


// 🧠 TAKEAWAY:
// - Branding types allows us to create distinct types that are not interchangeable, even if they are based on the same underlying type (like string).
// - This can help prevent accidental assignment of values that have the same type but different meanings, enhancing type safety in our code.
// - The brand is only part of the type system and does not affect the runtime value, so we can still use the underlying type as usual.: