let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert objects to strings and compare
const stringifiedObj1 = JSON.stringify(obj1);
const stringifiedObj2 = JSON.stringify(obj2);

if (stringifiedObj1 === stringifiedObj2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

