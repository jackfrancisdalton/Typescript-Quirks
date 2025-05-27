let nums: number[] = [1,2,3];
let anys: any[] = nums;

anys.push("oops");         // so we now have tha rray: [1,2,3, "oops"]
const n: number = nums[3]; // 🌟 Qurik: we can assign this value to a number const!

// Now what appears to be a number is actually a string, but TypeScript does not complain about it!
console.log(n);