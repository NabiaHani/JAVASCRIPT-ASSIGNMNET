// EXERCISE 3.1

// Point 1: Create an array for your shopping list with 3 items
let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList);

// Point 2: Check the length of your shopping list and output it to the console
console.log("Shopping List Length: " + shoppingList.length);

// Point 3: Update "Bread" to "Bananas"
// Find the index of "Bread" in the array and replace it with "Bananas"
let breadIndex = shoppingList.indexOf("Bread");
if (breadIndex !== -1) {
  shoppingList[breadIndex] = "Bananas";
}

// Point 4: Output the entire list to the console
console.log("Updated Shopping List: " + shoppingList);






// EXERCISE 3.2

// Point 1: Create an empty array for your shopping list
let shopping_List = [];
console.log(shopping_List);

// Point 2: Add Milk, Bread, and Apples to your list
shopping_List.push("Milk", "Bread", "Apples");
console.log(shopping_List);

// Point 3: Update "Bread" with "Bananas" and "Eggs"
let breadIndex1 = shoppingList.indexOf("Bread");
if (breadIndex1 !== -1) {
  shoppingList.splice(breadIndex1, 1, "Bananas", "Eggs");
}

// Point 4: Remove the last item from the array and output it
let lastItem = shoppingList.pop();
console.log("Removed item: " + lastItem);

// Point 5: Sort the list alphabetically
shoppingList.sort();

// Point 6: Find and output the index value of "Milk"
var milkIndex = shoppingList.indexOf("Milk");
console.log("Index of 'Milk': " + milkIndex);

// Point 7: Add "Carrots" and "Lettuce" after "Bananas"
var bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

// Point 8: Create a new list containing "Juice" and "Pop"
let newList = ["Juice", "Pop"];

// Point 9: Combine both lists and add the new list twice to the end of the first list
shoppingList = shoppingList.concat(newList, newList);

// Point 10: Get the last index value of "Pop" and output it
let lastIndexPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of 'Pop': " + lastIndexPop);

// Point 11: Output the final shopping list
console.log("Final Shopping List: " + shoppingList);






// EXERCISE 3.3

// Point 1: Create an array containing the values 1, 2, and 3
let originalArray = [1, 2, 3];

// Point 2: Nest the original array into a new array three times
let nestedArray = [originalArray, originalArray, originalArray];

// Point 3: Output the value 2 from one of the arrays into the console
console.log("Value at index 1 in one of the nested arrays: " + nestedArray[0][1]);







// EXERCISE 3.4

// Point 1: Create a myCar object with properties
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Royalblue",
    forSale: true
  };
  
  // Point 2: Create a variable to hold the string value 'color'
  let car = "color";
  
  // Use the variable within square bracket notation to change the 'color' property
  myCar[car] = "Red";
  
  // Point 3: Assign a new property 'forSale' and set its value using the variable
  car = "forSale";
  myCar[car] = false;
  
  // Point 4: Output 'make' and 'model' to the console
  console.log("Make: " + myCar.make);
  console.log("Model: " + myCar.model);
  
  // Point 5: Output the value of 'forSale' to the console
  console.log("For Sale: " + myCar.forSale);
  






//   EXERCISE 3.5

// Point 1: Create an object named "people" with an empty "friends" array
let people = {
    friends: []
  };
  
  // Point 2: Create three variables, each containing an object for your friends
  let friend1 = {
    firstName: "John",
    lastName: "Doe",
    ID: 1
  };
  
  let friend2 = {
    firstName: "Alice",
    lastName: "Johnson",
    ID: 2
  };
  
  let friend3 = {
    firstName: "Bob",
    lastName: "Smith",
    ID: 3
  };
  
  // Step 3: Add the three friends to the "friends" array
  people.friends.push(friend1, friend2, friend3);
  
  // Point 4: Output the "people" object to the console
  console.log(people);






//   CHAPTER PROJECT
// MANIPULATING AN ARRAY

let myArray = ["John", "Svekis", "Smith", "Alice"];

// Remove the first and last items
myArray.shift(); // Remove the first item (John)
myArray.pop();   // Remove the last item (Alice)

// Add "FIRST" to the start of the array
myArray.unshift("FIRST");

// Assign "hello World" to the fourth item value
myArray[3] = "hello World";

// Assign "MIDDLE" to the third index value
myArray.splice(2, 0, "MIDDLE");

// Add "LAST" to the last position in the array
myArray.push("LAST");

// Output the transformed array to the console
console.log(myArray);



// COMPANY PRODUCT CATALOG

// Point 1: Create an array to hold the inventory of store items
let inventory = [];

// Point 2: Create three items with name, model, cost, and quantity properties
let item1 = {
  name: "Laptop",
  model: "XPS 13",
  cost: 1200,
  quantity: 10
};

let item2 = {
  name: "Smartphone",
  model: "iPhone 13",
  cost: 999,
  quantity: 20
};

let item3 = {
  name: "Tablet",
  model: "iPad Air",
  cost: 699,
  quantity: 15
};

// Point 3: Add all three objects to the main array
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log("Inventory:");
console.log(inventory);

// Point 4: Access the quantity element of the third item and log it to the console
let thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item: " + thirdItemQuantity);


  