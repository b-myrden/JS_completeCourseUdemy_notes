const brendanArray = [
    'Brendan',
    'Myrden',
    2037 -1992,
    'teacher',
    ['Mike','Josh', 'Jason',],
  ];
  
  
  const brendan = {
  
    firstName: 'Brendan',
    lastName: 'Myrden',
    age: 2037 - 1994,
    job: 'Musician, Programmer',
    friends: ['Mike', 'Josh', 'Jason', 'Brendan','Aaron', 'Sean'],
  
  };
  
  
  // Objects are one of the most fundamental parts of JS. Most common is with {} - called Object Literal Syntax
  
  console.log(brendan);
  
  
  console.log(brendan.lastName);
  
  console.log(brendan['lastName']);
  
  const nameKey = 'Name';
  
  console.log(brendan['last' + nameKey]);
  console.log(brendan['first' + nameKey]);
  
//




//

const brendan = {
  
    firstName: 'Brendan',
    lastName: 'Myrden',
    age: 2037 - 1994,
    job: 'programmer',
    friends: ['Mike','Josh','Steve','Jim'],
  };
  
  
  console.log(brendan);
  
  const nameKey = 'Name';
  
  console.log(brendan['first' + nameKey]);
  console.log(brendan['last' + nameKey]);
  
  const interestedIn = prompt('What would you like to know about Brendan? Choose between age, job and friends.')
  
  
  if(brendan[interestedIn]) {
    
  console.log(brendan[interestedIn]);
  } 
  
  else {
  
  console.log(brendan[prompt('Wrong Request! What would you like to know about Brendan? Choose between age, job and friends.')])};
  
  
  brendan.location = 'NL';
  brendan['twitter'] = '@brendanmyrden';
  console.log(brendan);
  
  
  
  console.log(brendan.firstName + ' has ' + brendan.friends.length + ' friends, and his best friend is named ' + brendan.friends[1]);


  //







  //



  const brendan = {
  
    firstName: 'Brendan',
    lastName: 'Myrden',
    birthYear: 1994,
    hasDriversLicense: true,
    job: 'programmer',
    friends: ['Mike','Josh','Steve','Jim'],

    // calcAge: function(birthYear){
    // return 2037 - birthYear;

//     calcAge: function(){
//   // console.log(this);
//   return 2037 - this.birthYear
// }

    calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    }
};
  


// Any function that is attached to an object is called a method.

console.log(brendan.calcAge(1994));

console.log(brendan.age);



//





//


const brendan = {
  
    firstName: 'Brendan',
    lastName: 'Myrden',
    birthYear: 1994,
    hasDriversLicense: true,
    job: 'programmer',
    friends: ['Mike','Josh','Steve','Jim'],

    // calcAge: function(birthYear){
    // return 2037 - birthYear;

//     calcAge: function(){
//   // console.log(this);
//   return 2037 - this.birthYear
// }

    calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}. He has ${this.friends.length} friends, was born in ${this.birthYear}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`}
};
  


// Any function that is attached to an object is called a method.

console.log(brendan.calcAge(1994));

console.log(brendan.age);

console.log(brendan.getSummary());




//




//


// Arrow Function Review

...


// Function Expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function

const calcAge1 = birthYear => 2037 - birthYear;
const age1 = calcAge1(1995);
console.log(age1);





const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
} ; 

console.log(yearsUntilRetirement(1994, 'Bob'));
console.log(yearsUntilRetirement(1999, 'Jonny'));


// Arrow Functions don't get (this.) :/





/// Intro to objects in JS

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2);
        return this.BMI;
    },

}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2);
        return this.BMI;
    },

}


mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI)


if(mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI at (${john.BMI}).`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI at (${mark.BMI}).`)
};




// Loops

console.log('Lifting weights repeatition 1');
console.log('Lifting weights repeatition 2');
console.log('Lifting weights repeatition 3');
console.log('Lifting weights repeatition 4');
console.log('Lifting weights repeatition 5');
console.log('Lifting weights repeatition 6');
console.log('Lifting weights repeatition 7');
console.log('Lifting weights repeatition 8');
console.log('Lifting weights repeatition 9');
console.log('Lifting weights repeatition 10');

for (let rep = 1; rep <= 10; rep++ ) {
    console.log(`Lifting weights repetition ${rep}`);
}

//for loop keeps running while condition is true





// Loops

const brendanArray = [
    'Brendan',
    'Myrden',
    2037 -1992,
    'teacher',
    ['Mike','Josh', 'Jason',],
    true,
  ];

const types = [];


//   for(let i = 0; i < 5 ; i++) {
//     console.log(brendanArray[i]);
//   }


  for (let i = 0; i < brendanArray.length; i++) {
    // Reading from Brendan array
    console.log(brendanArray[i], typeof brendanArray[i]);


    // Filling types array
    // types[i] = typeof brendanArray[i];

    types.push(typeof brendanArray[i]);
  }

  console.log(types);



    const years = [1997, 1994, 1987, 1748];

    const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);






/// CONTINUE AND BREAK 

const brendanArray = [
    'Brendan',
    'Myrden',
    2037 -1992,
    'teacher',
    ['Mike','Josh', 'Jason',],
    true,
  ];

// continue

console.log( '----- ONLY STRINGS ------')
for (let i = 0; i < brendanArray.length; i++) {
    if(typeof brendanArray[i] !== 'string') continue;

    console.log(brendanArray[i], typeof brendanArray[i]);
}

// break 

console.log( '----- BREAK WITH NUMBER ------')
for (let i = 0; i < brendanArray.length; i++) {
    if(typeof brendanArray[i] === 'number') break;

    console.log(brendanArray[i], typeof brendanArray[i]);
}



// BACKWARD LOOP

const brendanArray = [
    'Brendan',
    'Myrden',
    2037 -1992,
    'teacher',
    ['Mike','Josh', 'Jason',],
    true,
  ];

//   

for(let i = brendanArray.length - 1; i >= 0; i--) {
    console.log(i, brendanArray[i]);
}



// LOOP IN LOOP


for (let exercise = 1; exercise < 4; exercise++ ){
    console.log(`-------- STARTING EXERCISE ${exercise} ---------`);

    for(let rep = 1; rep <= 5; rep++){
        console.log(`Excercise ${exercise}; Lifting weights repetition ${rep}`)
    }
}


// WHILE loop

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}



let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}








// Coding Challenge #4


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [10.78, 9889, 87.78, 567.80, 4857, 506.90, 87.90, 9.8, 45, 54.89];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals)


const calcAverage = function(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        //sum = sum + arr[i];
        sum += arr[i];
    }

    return sum / arr.length
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));












// SECOND TIME RUN THROUGH - SECTION 3  //


// SECTION 3


`use strict`;

// strict mode activated, must be first statement, other than comments

// helps us avoid bugs in the code, it helps us avoid doing certain tasks

// will create visisble errors for us, otherwise the errors would just 'fail silently'




let hasPassport = false; 
const testApproved = true;


if (testApproved) hasPassport = true; 
    
if(hasPassport) console.log(`I can travel anywhere!`);



// Reserved Words

// const interface = `Audio`;
// const private = 5867;
// const if = 23;


______________________________________________________________



function logger() {
    console.log('My name is Bren');

}

// When the {} are introduced it's called the 'function buddy'

logger();

// This is how you use the function. Calling, Invoking, or Running the Function.



function executor() {
    console.log('This code has been executed.');
}

executor();


______________________________________________________________



function pastryChef (cakes, pies) {
    console.log(cakes, pies);
    const plate = `Your plate has ${cakes} cakes on it! With ${pies} pies as well!`
    return plate;

}


const myPlate = pastryChef(2, 3);

// These numerical values are called the 'arguments'.

console.log(myPlate);

console.log(pastryChef(2,3));

// Both execute in the console, you can use either way. The second is simply not captured in a variable. 






const yourPlate = pastryChef(7, 2);

console.log(yourPlate);



______________________________________________________________



function barTab (wine, beer) {
    console.log(wine, beer);
    const tab = `Your tab has ${wine} glasses of wine on it and ${beer} bottles of beer.`;
    return tab;

}


const myTab = barTab(4,4);
console.log(myTab);

console.log(barTab(7,6));







// D.R.Y. - Keep your code dry, Don't Repeat Yourself



const num = Number('23');
console.log(num);

// Or write 'num' in the dev console



______________________________________________________________

// Function Declaration

// Can call first and declare later




// My Personal Created Example

function calcGraduation(grade){
    const graduation = 12 - grade; 
    console.log(`You will graduate in ${graduation} years.`);
    return graduation;
} 

calcGraduation(6);


// OR Write Like

// function calcGraduation(grade){ 
//     console.log(`You will graduate in ${graduation} years.`);
//     return 12 - grade;
// } 

// calcGraduation(6);

const susanGraduatesIn = console.log(calcGraduation(1));
const mikeGraduatesIn = console.log(calcGraduation(5));

______________________________________________________________


// Function Expression

// Cannot call first and declare later

// Also a function without a name, called an 'anonymous' function

// A value is produced by the function expression, and is saved to the 'numOfSiblings' variable



// My Personal Created Example

const numOfSiblings = function (siblings){
    return siblings - 3;
}


const johnHas_Siblings = numOfSiblings(7);

console.log(`John has ${johnHas_Siblings} siblings.`);



const sarahHas_Siblings = console.log(`Sarah has ${numOfSiblings(12)} siblings`);



______________________________________________________________

// Function Within A Function 





// My Personal Created Example


function cutBakedGoods(bakedGood){
    return bakedGood * 4;
}


function bakery (cakes, pies) {
    const cakePieces = cutBakedGoods(cakes);
    const piePieces = cutBakedGoods(pies);
    // Called a function inside of another function

    console.log(cakes, pies);
    const plate = `Your plate has ${cakePieces} slices of cakes on it! With ${piePieces} slices of pies as well!`
    return plate;

}

console.log(bakery(2,3));





