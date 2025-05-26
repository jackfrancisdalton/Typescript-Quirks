// 1. ============= Ts type checking differs depending on how and where it is applied leading to quirks 

type User = { name: string };

// ✅ Defining a user with matching properties works as expected
const user2: User = { name: 'Charlie' };

// ❌ Defining it with additional properties results in an error
const userWithExcessiveTypes: User = { name: 'Alice', age: 30, email: "alice@email.com"}; 

// 🌟 QUIRK: definine an untyped object and then assigning it to a type does work through!
const person = { name: 'Bob', age: 30, email: "bob@email.com" };
const user1: User = person; 

// As a result you get some odd behaviour where you can have key/values existing an object typescript is not aware of:
[user2, user1].forEach(user => {
    console.log(user.name);     // Charlie, Bob
    console.log(user["age"]);   // undefined, 30
});