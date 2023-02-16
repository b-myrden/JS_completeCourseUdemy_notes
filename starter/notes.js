// STRICT MODE

console.log("What is 'strict mode'?")

// You can use it for specific blocks or functions but placing it at the beginning is more secure. Strict mode makes it easier for developers to avoid accidental errors ie. introducing bugs. It forbids us from doing certain things. 

// It creates visible errors for us in particular situations. Without it, JS would fail silently.  

'use strict';

// One of the most important changes strict mode introduces

let hasDriversLicense = false;
const passTest = true;

// Introducing the bug

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive everyone!`);

// The expection would be that the console would execute 'I can drive everyone' because of the chaning of 'hasDriversLicense' to true. Yet, it is seen that 'hasDriversLicense' is spelt without the s and therefore the console logs nothing. 

// Without strict mode the console shows nothing. With it there is an 'Uncaught ReferenceError' 

// It also introduces a short list of variable names that are reserved for features that may be added to the language soon, for example. 

const interface = 'Audio';

// You get the error in the console 'Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:25:7)

const private = 3444;

// The same error occurs, there may be private fields or classes in the future. 

const if = 23;

// Cannot do this because if is already used for if/else control statement 




// FUNCTIONS

// The fundamental building blocks of JS is functions, so what are they?

// A function is a piece of code we can reuse over and over again as we go. It is similar to a variable but with whole chunks of code.

// a variable holds a value, a function can hold one or mode lines of code

// parameters are variables that are specific to this function, and will be called once the function is defined. 


// "'function' keyword here"    "defined function name " (the parameters) {This is the function buddy}


function logger() {
    console.log(`My name is Brendan.`);
}

// We can now use this function as many times as we want

logger();

// This above is called running the function, invoking the function or calling the function.

logger();
logger();
logger();

// The line of code 'My name is Brendan' is executed in the console multiple times. 




// Usually data is passed into a function, we can also return the data (give us data back to be used for something else)

// It can receive and return data back - like a machine

function fruitProcessor(bananas, kiwis) {
    console.log(bananas, kiwis);
    const juice = `Juice with ${bananas} bananas and ${kiwis} kiwis!`
    return juice;
}


const bananaJuice = fruitProcessor(5, 0); // these specific values are assigned to each parameter

console.log(bananaJuice);
console.log(fruitProcessor(0, 4)); // can also be called directly in the console.log


const bananaKiwiJuice = fruitProcessor(2, 4);
console.log(bananaKiwiJuice);

const num = Number('15');
console.log(num);

// if you decide to invoke a function it will produce a result for you based on the code in the body. If you want to see that execution the call must be assigned to a variable, then the variable shown in the console.log OR, place the call right into the console.log itself.


function smoothieMaker(mangos, blueberries) {

    const smoothie = `Smoothie with ${mangos} mangos and ${blueberries} cups of blueberries.`;
    return smoothie;
}

const blueberryBlast = smoothieMaker(0, 3);
const mangoBlueberryBlitz = smoothieMaker(3, 3);

console.log(blueberryBlast);
// console.log(smoothieMaker(3, 3)); // it can  be logged to the console directly. 

console.log(mangoBlueberryBlitz);

// These are the actual values for the parameters when called, then when it's been stored to a variable it's can be called in the console and the template literal is printed. The process of the function is saved to the variable name. 

// A function can be used simply without parameters and can also not return anything. 




// FUNCTION DECLARATIONS, FUNCTION EXPRESSIONS




// THIS IS an example of a FUNCTION DECLARATION

function calcAge1(birthYear) {
    return 2037 - birthYear;
    // console.log(`Brenter is ${age} years old.`)
}

const age1 = calcAge1(1993);
console.log(age1);

// parameters are the placeholder, the argument is the actual value. 

/* Function declarations can be called before they are defined. 

const age1 = calcAge1(1993);

function calcAge1(birthYear) {
     return 2037 - birthYear;

This will still produce the same result. */



// THIS IS an example of a FUNCTION EXPRESSION

// You basically write a function without a name, define the parameter, the function buddy, then store all of it in a variable. That variable will now be the function. 

// A function without a name is also called an anonymous function

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Expressions produce values, values are stored to variables 

const age2 = calcAge2(1998);

console.log(age1, age2);

// Function expressions cannot be called before they are defined, must be initialized first




// ARROW FUNCTIONS 

const calcAge3 = birthYear => 2037 - birthYear;

// the ' birthYear => 2037 - birthYear; ' is a value we assign to a variable, 'calcAge3'

// No need for a code block or function buddy. The value will be returned implicitly without needing the 'return' keyword.

const age3 = calcAge3(1887);
console.log(age3);


const firstName = 'Seti';

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

// only omit the return if it is a one liner of code
// wrap parameters if there are multiple

console.log(yearsUntilRetirement(1991, 'Bill'));
console.log(yearsUntilRetirement(1978, 'Jimbo'));

const setiRetiresIn = yearsUntilRetirement(2001, 'Seti');
console.log(setiRetiresIn);

//As you add more lines of code, and more parameters you basically lose the advantage of having arrow functions

// Arrow functions are distinctly different because they do not work with the 'this' keyword. 




// CALLING FUNCTIONS in other FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `This juice has ${applePieces} apple pieces, and ${orangePieces} orange pieces.`
    return juice;
}


console.log(fruitProcessor(2, 3));


// Lets assume the fruitProcessor needs the fruit cut into smaller pieces

// Love that this works!

// It is really common for one function to call another function. Having function like 'cutPieces' being seperate is helpful because you can change the amount of pieces you want to be cut. Ie. 3,4,5,6




// IF/ELSE with the return

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// each parameter is a local variable to each function

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired 🥳 `);
        return -1; // -1 is a standard return in coding

    }
}

// the return keyword immediately exits the function once completed, it gives it's value and moves on completely. It is said 'the function has returned'.

console.log(yearsUntilRetirement(1994, 'Brendan'));
console.log(yearsUntilRetirement(1950, 'Mike'));






// DATA STRUCTURES : ARRAYS

// Say "I want to store my friends names so I can use them later in my program"

// This is the way we know now 

// const friend1 = 'Michael';
// const friend2 = 'Stephen';
// const friend3 = 'Peter';

// Array = alike to a container we can bundle many variables in, and reference them later

const friends = ['Mike', 'Stephen', 'Peter']; // this is called the literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

// a different way of creating an array by using the 'Array' function 

console.log(friends[0]); // This will call the first value in the array because coding is binary, we always start at 0 

console.log(friends[2]);




// HOW TO CALCULATE HOW MANY ELEMENTS ARE IN THE ARRAY?

console.log(friends.length); //.length is a property, this will reveal the amount of values in the array. It is NOT zero based. 

console.log(friends[friends.length - 1]); // this is useful to find the last element in the array. In order to get the proper number you must subtract one. The expression (not declaration) 'friends.length - 1' produces a value, which is then used to calculate for 'friends' itself. 




// SUBTRACTING FROM ARRAY

friends[2] = 'Jay' // results in changed array, only primitive values are immutable. An array is not a primitive value so it can be mutated based on what JS holds in memory. You cannot erase the entire array.

console.log(friends);

// friends = ['Bob', 'Alice']; // This cannot be done




// DIFFERENT VALUE TYPES AT THE SAME TIME
const firstName = 'Brendan';
const brendan = [firstName, 'Myrden', 2037 - 1994, `teacher`, friends]; // ARRAYS go 0, 1, 2

console.log(brendan);




// ARRAY EXERCISES

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const newYears = [1990, 1967, 2002, 2010, 2018];

// calcAge(years); This will not work because it's an array

const age1 = calcAge(newYears[0]);
const age2 = calcAge(newYears[1]);
const age3 = calcAge(newYears[newYears.length - 1]);

console.log(age1, age2, age3);

// We can place a function call in an array because they create a value

const ages = [calcAge(newYears[0]), calcAge(newYears[1]), calcAge(newYears[newYears.length - 1])];

// JS will run all three function calls and then place them into an array ie. 'ages'

console.log(ages);





// ARRAY OPERATIONS (METHODS)

// BASICS


// ADD / PUSH / To last

const friends = ['Mike', 'Jay', 'Josh'];
const newFriendsLength = friends.push('Aaron'); // it is a function spec. an array method

console.log(friends, newFriendsLength);


// ADD / To Front

friends.unshift('Sean');
console.log(friends);


// REMOVE / Subtract from last

const poppedFirst = friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // REMOVE / Subtract from first
console.log(friends);

console.log(friends.indexOf('Mike')); // LOCATION

console.log(friends.includes('Jay')); // Returns true if the element is in the array and false if it is not.
console.log(friends.includes('Matt')); // uses strict equality

friends.push(23);
console.log(friends.includes('23')); // uses strict equality
console.log(friends.includes(23));

if (friends.includes('Jay')) {
    console.log(`You have a friend named Jay.`);
}





'use strict';



// REVIEW 

// Switch Statement



const sandwich = `ham`;

switch (sandwich) {
    case `ham`:
        console.log(`Ham is what I want on my sandwich.`);
        console.log(`Ham tastes good with cheese! 🧀 `)
        break;
    case `roast beef`:
        console.log(`Roast beef is what I want on my sandwich.`);
        console.log(`Roast beef tastes great with gravy! 🍶 `);
        break;
    case `chicken`:
        console.log(`Chicken is great with mayo.`);
        console.log(`Chicken tastes great with batter!`);
        break;
    case `turkey`:
        console.log(`Turkey has an enzyme that helps you sleep!`);
        console.log(`Turkey tastes great with cranberry sauce! 🍮`);
        break;
};

// this works


const children = `jim`;

switch (children) {
    case `jim`:
        console.log(`Jim has basketball on Monday, Thursday, and Friday.`);
        break;
    case `jessica`:
        console.log(`Jessica has volleyball on Wednesday.`);
        console.log(`Jessica has dance Thursday night.`);
        break;
    case `everly`:
        console.log(`Everly attends bingo on Sunday with her grandparents.`);
        break;
    case `scott`:
        console.log(`Scott attends hockey Monday, Wednesday, and Saturday.`);
        break;
    case `sam`:
        console.log(`Sam is currently attending no activities.`);
}

// this works




// Conditional Operator / Ternary

let populationCanada = 36678090;

populationCanada >= 33000000 ? console.log(`Canada's population is above average ⏫ .`) :
    console.log(`Canada's population is below average ⏬ .`);

// OR

// const isItAboveAverage = population >= '33,000,000' ? console.log(`Canada's population is above average ⏫ .`) :
//     console.log(`Canada's population is below average ⏬ .`);




let prefer = `watermelon`;

prefer === `watermelon` ? console.log(`John prefers to eat watermelon in winter ❄️ .`) : console.log(`John prefers to eat hot soup in the summer 🌞 . `);

// this works


let need = `piano`;

if (need === `guitar`) {
    console.log(`The guitar is needed for the recording session.`);
} else if (need === `piano`) {
    console.log(`The piano is needed for the recording session.`);
} else {
    console.log(`There is a different instrument needed for this recording session.`);
}

// this works


let isNumberBig = 33000330;

const answer = isNumberBig >= 4000000 ? `Yes it is. Look! ${isNumberBig}` : `No it's not, look! ${isNumberBig}`;

console.log(answer);

// this works

const hour = 12;
console.log(`I only drink ${hour >= 10 ? 'coffee' : 'water'} at this time of day sir.`);




let breakfast = `oatmeal`; // try banana as well
let hotBeverage = `tea`;

console.log(
    `${breakfast === `banana` ? `Yes, please` : `No, please don't`} bring me ${hotBeverage} with my breakfast love.`
);

// this works 



let goodBehaviour = `yes`; // try no
let student = `Jamie`;

console.log(
    `${goodBehaviour === `yes` ? `Good news! We're going to the` : `Bad news! We're not going to the`} amusement park this weekend ${student}`
);




// ARRAYS

// PRECURSOR

const worldPopulation = 7900000000;

function percentageOfTheWorld1(population) {

    const percentage = (population / worldPopulation) * 100
    // return `This country represents ${percentage} percent of the worlds population.`;
    return percentage;
}




const populations = [36991981, 334334217, 146171015, 1441000000];

if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
};


console.log(populations.length);
console.log(populations[0]);
console.log(populations[1]);
console.log(populations[2]);
console.log(populations[3]);

// the array itself is zero based ie. 0, 1, 2, 3

// the .length function is NOT zero based ie. .length = 4

const percentages = [percentageOfTheWorld1(populations[0]), percentageOfTheWorld1(populations[1]), percentageOfTheWorld1(populations[2]), percentageOfTheWorld1(populations[3])];

console.log(percentages);




const neighbours = ["Nepal", "Pakistan", "Bangladesh", "Myanmar", "China"];




neighbours.push("Utopia");

console.log(neighbours); // to see in console




neighbours.pop(neighbours[4]);

console.log(neighbours); // to see again




if (neighbours.includes("Germany") ? true : console.log(`This is probably not a central european country`));




// Change one of the neighbouring countries

console.log(neighbours.indexOf("China"));

// neighbours[] = 'Expensivia';

console.log(neighbours);

neighbours[4] = "Republic of China";

console.log(neighbours);

neighbours[3] = "Republic of Myanmar";

console.log(neighbours);

if (neighbours.includes("Republic of Myanmar")) {
    console.log(`You have been to Myanmar!`)
};




// INTRODUCTION to OBJECTS

// Most fundamental subject in all of JS

const brendanArray = [

    'Brendan',
    'Myrden',
    2023 - 29,
    `musician`,
    ['Mike', 'Josh', 'Jay', 'Aaron', 'Sean']

];

// this is called 'object literal syntax'

// in objects we define key value pairs

const brendan = {

    firstName: 'Brendan',
    lastName: 'Myrden',
    age: 2023 - 29,
    job: `JavaScript F/E Developer`,
    friends: ['Mike', 'Josh', 'Jay', 'Aaron', 'Sean'],

}

// these are five key / value pairs.

// Each value is assigned a key, ie. firstName, with an assigned value ie. 'Brendan'. A key is also called a property. 

// array can be accessed by their numerical order, so they should be used to more sequencial information.

// objects can be accessed by their keys, therefore they should be used to store more unstructured data. Here is an example ;

console.log(brendan);

console.log(brendan.lastName);

// the dot/period is an operator, it will go to the brendan object and retrieve 'lastName'

console.log(brendan['lastName']);

const nameKey = 'Name';

console.log(brendan[`first` + nameKey]);
console.log(brendan[`last` + nameKey]);




const interestedIn = prompt(`What do you want to know about Brendan? Choose between firstName, lastName, age, job, and friends.`);

// console.log(brendan[interestedIn]);

// brendan.interestedIn will not compute because there is not interestedIn property in the Object

// brendan[interestedIn] will call the prompt, taking the choice from the prompt and using what is typed ie. 'age', retrieve the value from the brendan Object and return the age value. 

if (brendan[interestedIn]) {
    console.log(brendan[interestedIn]);
} else {
    console.log('Wrong request!')
};




brendan.location = 'Newfoundland';
// this will add the key value location to the object

brendan['twitter'] = '@myrden_brendan'
// this will add the key / property 'twitter' to the object


console.log(brendan);




// Challenge 

// "Brendan has 3 friends, and his best friend is named Aaron" 

const sentence = `${brendan.firstName} has ${(brendan.friends.length)} friends, and his best friend is named ${brendan.friends[0]}`;

console.log(sentence);

// based on operator procedence // developer.mozilla.org




// Object Methods

// Objects, being similar to arrays, can hold various data. It can even hold multiple arrays, or multiple objects within itself. 

// A Function is another type of value, if it is a value then we can create a key value pair in which the value is a function. Therefore we can add functions to objects.


const brendan = {

    firstName: 'Brendan',
    lastName: 'Myrden',
    birthYear: 2023 - 29,
    job: `JavaScript F/E Developer, Musician, and Businessman`,
    friends: ['Mike', ' Josh', ' Jay', ' Aaron', ' Sean'],
    hasDriversLicense: true, // test false

    // first version without this keyword

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // second variation with this keyword

    // calcAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    // third variation with this keyword

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;

    }, // ALWAYS PUT YOUR COMMA!

    // you can use the dot notation to create new properties
    // this is the most efficient solution

    getSummary: function () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.calcAge(1994)} year old ${this.job}. His friends are ${this.friends} and he has ${(this.hasDriversLicense ? `a` : `no`)} drivers license.`)
    },

    // this works

    // you can use a function call in a template string

};

// the 'this' keyword refers to the object itself. It is equal to the object calling the method ie. 'brendan'. It also helps for if you change the object name you can still call it without having to change the name everywhere - the 'this' will now call to the changed name. 

console.log(brendan.calcAge(1994)); // whatever appears before the dot is what is calling the method

// console.log(brendan['calcAge'](1994));


console.log(brendan.age);
console.log(brendan.age);
console.log(brendan.age);
console.log(brendan.age);




console.log(brendan.getSummary());

// ARRAYS are also OBJECTS, just a special kind. They have methods we can use to manipulate them like push, pop, shift, unshift, and many more. // This is why they can have methods as well. 




// LOOPS - Another Control Structure

// Very important fundamental aspect of every programming language. They allow us to automate repetitive tasks.

// console.log('Lifting weights repetition 1 🏋🏼‍♂️');
// console.log('Lifting weights repetition 2 🏋🏼‍♂️');
// console.log('Lifting weights repetition 3 🏋🏼‍♂️');
// console.log('Lifting weights repetition 4 🏋🏼‍♂️');
// console.log('Lifting weights repetition 5 🏋🏼‍♂️');
// console.log('Lifting weights repetition 6 🏋🏼‍♂️');
// console.log('Lifting weights repetition 7 🏋🏼‍♂️');
// console.log('Lifting weights repetition 8 🏋🏼‍♂️');
// console.log('Lifting weights repetition 9 🏋🏼‍♂️');
// console.log('Lifting weights repetition 10 🏋🏼‍♂️');

// this would be the traditional way of executing, but it doesn't follow the D.R.Y. acronym.

/* 

first part - initializes the variable, and where we start

for loop keeps running while condition is true.

second part - a logical condition checked each time before the consequtive followup 
 
the third part is updating the condition

*/

for (let rep = 1; rep <= 10; rep++) { // try changing rep = 5
    console.log(`Lifting weights repeatition ${rep} 🏋🏼‍♂️`);
}




// LOOP through ARRAYS

const brendanArray = [

    'Brendan',
    'Myrden',
    2023 - 29,
    `musician`,
    ['Mike', 'Josh', 'Jay', 'Aaron', 'Sean'],
    true,

];

for (let i = 0; i <= brendanArray.length - 1; i++) { // or i < 5
    console.log(brendanArray[i], typeof brendanArray[i]);
};




// CREATING NEW ARRAYS based on OLD ARRAYS

const types = [];

for (let i = 0; i <= brendanArray.length - 1; i++) { // or i < 5
    // Reading of array
    console.log(brendanArray[i], typeof brendanArray[i]);

    // Filling a 'types' array
    // types[i] = typeof brendanArray[i]; // less 'clean'

    // EACH type[i] will be assigned to typeof 'brendanArray[i], from 0 through to 5
    types.push(typeof brendanArray[i]) // most 'clean'
};

console.log(types);




const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(years);
console.log(ages);




// continue - to exit the current iteration of the loop
console.log('---ONLY STRINGS---')
for (let i = 0; i < brendanArray.length; i++) {
    if (typeof brendanArray[i] !== 'string') continue;

    console.log(brendanArray[i], typeof brendanArray[i]);
}


// break - to completely terminate the whole loop

console.log('---BREAK AFTER NUMBER---')
for (let i = 0; i < brendanArray.length; i++) {
    if (typeof brendanArray[i] === 'number') break;

    console.log(brendanArray[i], typeof brendanArray[i]);
}




// LOOP through ARRAYS

const brendanArray = [

    'Brendan',
    'Myrden',
    2023 - 29,
    `musician`,
    ['Mike', 'Josh', 'Jay', 'Aaron', 'Sean'],
    true,

];




// LOOPING BACKWARDS

// 0, 1, 2, 3, 4

// 4, 3, 2, 1, 0

for (let i = brendanArray.length - 1; i >= 0; i--) {
    console.log(i, brendanArray[i]);
}




// LOOPS IN LOOPS

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏼‍♂️`);
    }
}





// The WHILE loop

let rep = 1;

// the condition needs to stay 'true' for the while loop to continue
while (rep <= 10) {
    console.log(`WHILE : Lifting weights repetition ${rep} 🏋🏼‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}




// SECOND BATCH OF NOTES FOR LOOPS

// THE LOOP - Another Control Structure

// fundamental to every language, allow us to automate repetitive tasks

// console.log('Lifting weights repetition 1 🏋🏼‍♂️');
// console.log('Lifting weights repetition 2 🏋🏼‍♂️');
// console.log('Lifting weights repetition 3 🏋🏼‍♂️');
// console.log('Lifting weights repetition 4 🏋🏼‍♂️');
// console.log('Lifting weights repetition 5 🏋🏼‍♂️');


/* let rep = 1, initializes the beginning value that the loop begins at - repetition #1

rep <= 10, for loop keeps running because the condition is true

rep ++, the counter will increase by one each iteration */

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
}; // this loop keeps running while the second position condition is true




// THE LOOP - Looping, Breaking, and Continuing

const brendanArray = [

    'Brendan',
    'Myrden',
    2023 - 29,
    `musician`,
    ['Mike', 'Josh', 'Jay', 'Aaron', 'Sean'],
    true,

];


let types = [];

for (let i = 0; i <= brendanArray.length - 1; i++) {
    // Reading from jonas array
    console.log(brendanArray[i], typeof brendanArray[i]);

    // Filling a 'types' array; this is exactly the same as doing types[0] = 'string'
    types[i] = typeof brendanArray[i];

    // Another way; the cleaner way; to add types to the array
    types.push(typeof brendanArray[i]);


};

console.log(types);




// THE LOOP - Looping, Breaking, and Continuing

// calculate the ages into an empty array through a loop

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
    ages.push(2037 - years[i]); // you want to 'push' it into the empty array
}

console.log(ages);




// Continue - to exit the current iteration of the loop and continue to the next one
console.log('---ONLY STRINGS---')

for (let i = 0; i <= brendanArray.length - 1; i++) {
    if (typeof brendanArray[i] !== 'string') continue; // to only log strings to the console. 

    console.log(brendanArray[i], typeof brendanArray[i]);
}




// Break - to completely terminate the whole loop
console.log('---THIS IS A BREAK EXAMPLE---')

for (let i = 0; i <= brendanArray.length; i++) {
    if (typeof brendanArray[i] === 'number') break;

    console.log(brendanArray[i], typeof brendanArray[i])
}




// Looping Backwards { instead of 0, 1, 2, 3, 4 - it's 4, 3, 2, 1, 0}

for (let i = brendanArray.length - 1; i >= 0; i--) {
    console.log(i, brendanArray[i]);
}




// Looping INSIDE of a Loop

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-----Starting exercise ${exercise}`)

    // to get each rep inside the loop, you do. This will be presented each time the first loop is executed

    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep} 🏋🏼‍♂️`);
    }
}




// The WHILE LOOP

// runs 'while' the condition is true, just like the second part of the for loop

let rep = 1; // outside of the while loop
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
    rep++; // in the loop
}



let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
}

// in the situation you don't know how many iterations there will be, the while loop is used




const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];


for (let i = 0; i <= bills.length - 1; i++) {

    tips.push(bills[i] >= 50 <= 300 ? bills[i] * 0.15 : bills[i] * 0.20);

    totals.push(bills[i] + tips[i]);

    console.log(`For the bill ${bills[i]} the tip is ${tips[i]}, and the total is ${totals[i]}`);
    // console.log(tips, totals);
}

// this works!




`const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
}`

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tips[i] + bills[i]); // or totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);




const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]; // could be used
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7])); // as a check for the function. Adds to be 12, and divides by 3



console.log(calcAverage(bills));


const averageTips = `The average of these tips is ${calcAverage(tips)}`;
const averageTotals = `The average of these totals is ${calcAverage(totals)}`;

console.log(averageTips);
console.log(averageTotals);




