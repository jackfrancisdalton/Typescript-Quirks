// here we brand string ids as either UserId or ProductId
function mkUserId(id) { return id; }
function mkProductId(id) { return id; }
// That way when we want to use these ids we can ensure that we do not accidentally mix them up, as they are now distinct types.
function fetchUser(id) {
    console.log("Fetching user with id: ".concat(id));
}
function fetchProduct(id) {
    console.log("Fetching product with id: ".concat(id));
}
var uid = mkUserId("u_123");
var pid = mkProductId("p_456");
fetchUser(uid); // ✅ works fine as it has the required type of brand
// fetchProduct(uid);   // ❌ Error: UserId not assignable to ProductId
// When we console log the ids we only see the string, as the brand is not part of the runtime value, but only part of the type system.
console.log(uid); // prints: u_123
console.log(pid); // prints: p_456
