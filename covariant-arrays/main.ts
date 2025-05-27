let nums: number[] = [1,2,3];
let anys: any[] = nums;

anys.push("oops");         // so we now have tha rray: [1,2,3, "oops"]
const n: number = nums[3]; // 🌟 Qurik: we can assign this value to a number const!

// Now what appears to be a number is actually a string, but TypeScript does not complain about it!
console.log(n);


// 🧠 TAKEAWAY:
// - TypeScript allows assigning a more specific type (like number[]) to a more general type (like any[]), which can lead to unexpected behaviour.
// - This is because TypeScript uses structural typing, meaning it checks the shape of the types rather than their explicit type.
// - When we assign a value from a more general type (like any[]) to a more specific type (like number), TypeScript does not check the actual value at runtime, 
// - leading to potential runtime errors
// AVOID ANY!