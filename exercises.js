
// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map(function(currentElement) {
//     return currentElement + " ice creame";
// });


// console.log(array2);

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsnew = nums.map((numsElement) => {
    return numsElement * 2;
});

console.log("multiplied by 2 array",numsnew)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstVal, secondVal] = pizzaToppings;

console.log("firstVal of array", firstVal);
console.log("secondVal of array", secondVal);


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };

  const { make, model } = car;

  console.log("maker of the car",make);
  console.log("model of the car", model)

  
 // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppingsNew = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppingsNew];
console.log("using spread operator array", controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

const carNew = {
    make: 'Audi',
    model: 'q5',
  };

  const myCar = {...carNew};
  myCar.model = "q7";
  console.log("carNew Model",carNew);
  console.log("myCar model", myCar )
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
 // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const userEmail = "email";

const userProfile = {
    
    username: "Harry",
    [userEmail] : "harry@gmail.com"
};

const propertyName = "age";
const val = 10;

userProfile[propertyName] = val;
console.log("userprofile", userProfile);


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function practice(noun = "cat", adjective = "white") {
   return "The " + noun + " is " + adjective 
}

console.log(practice());

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let operator = pizza === "tasty"? "yum" : "yuck"

console.log("operator", operator);

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."


const LANGUAGE = "English"
const localLangConfig =  null ;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || LANGUAGE

// const check = LANG === LANGUAGE ? "en" : null
// Your code here

// Log the result
console.log('Language setting:', LANG);


// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || "light"




// Log the result
console.log('User theme setting:', USER_THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name

  
  console.log("ptional chaning",cat);