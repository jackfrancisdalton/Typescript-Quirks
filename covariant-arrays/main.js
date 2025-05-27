var nums = [1, 2, 3];
var anys = nums; // allowed (covariant)
anys.push("oops"); // at runtime: ["oops",1,2,3]
var n = nums[3]; // now can be string!
console.log(n);
