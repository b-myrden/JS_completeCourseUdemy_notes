// PART 2 - Coding Challenge 1

'use strict';

// each team competes 3 times, the average score is calculated
// only wins if it has double the avg of the other team, or else no one wins 

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// One way of doing this that works

// const calcAverage = (score1, score2, score3) => {
//     const average = ((score1 + score2 + score3) / 3);
//     return average;
// }

// DATA 1

const koalasAverage = calcAverage(65, 54, 49);
const dolphinsAverage = calcAverage(44, 23, 71);

function checkWinner(koalasAverage, dolphinsAverage) {
    if (koalasAverage >= (dolphinsAverage * 2)) {
        console.log(`The Koalas have become the winner! 🏆 ${koalasAverage} vs. ${dolphinsAverage}`)
    } else if (dolphinsAverage >= (koalasAverage * 2)) {
        console.log(`The Dolphins take home the trophy! 🏆 ${dolphinsAverage} vs. ${koalasAverage}`)
    } else {
        console.log(`Neither team has double the average score of the other, therefore no team wins!`)
    }
}

checkWinner(koalasAverage, dolphinsAverage);

// // DATA 2

const calcAverage2 = (score1, score2, score3) => {
    const average = ((score1 + score2 + score3) / 3);
    return average;
}

const koalasAverage2 = calcAverage2(23, 34, 27);
const dolphinsAverage2 = calcAverage2(85, 54, 41);


function checkWinner2(koalasAverage2, dolphinsAverage2) {
    if (koalasAverage2 >= (dolphinsAverage2 * 2)) {
        console.log(`The Koalas have become the winner! 🏆 ${koalasAverage2} vs. ${dolphinsAverage2}`)
    } else if (dolphinsAverage2 >= (koalasAverage2 * 2)) {
        console.log(`The Dolphins take home the trophy! 🏆 ${dolphinsAverage2} vs. ${koalasAverage2}`)
    } else {
        console.log(`Neither team has double the average score of the other, therefore no team wins!`)
    }
}

checkWinner2(koalasAverage2, dolphinsAverage2);
checkWinner(556, 110);



// THE TEACHERS WAY OF DOING IT

const calcAverage3 = (a, b, c) => (a + b + c) / 3;




// FUNDAMENTALS PART 2 - CODING CHALLENGE 1

// 'use strict';

// Dolphins & Koalas

// Each team competes 3 times
// The average of each team is calculated
// The team only wins if it has double the average of the other team
// Otherwise no team wins


const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(dolphinAvg1, koalaAvg1) {
    if (dolphinAvg1 >= 2 * koalaAvg1) {
        console.log(`The Dolphins win! 🏆`)
    } else if (koalaAvg1 >= 2 * dolphinAvg1) {
        console.log(`The Koalas win! 🏆`)
    } else {
        console.log(`No team wins the tournament.`)
    }
}

const dolphinAvg1 = calcAverage(44, 23, 71);
const koalaAvg1 = calcAverage(65, 54, 49);

const whoWins = checkWinner(dolphinAvg1, koalaAvg1); // both console the results
checkWinner(dolphinAvg1, koalaAvg1); // both console the results



console.log(dolphinAvg1, koalaAvg1);



// DATA 2 

// D : 85, 54, 41
// K : 23, 34, 27

const calcAverage2 = (a, b, c) => (a + b + c) / 3;

const dAvg2 = calcAverage2(85, 54, 41);
const kAvg2 = calcAverage2(23, 34, 27);

const checkWinner2 = function (dAvg2, kAvg2) {
    if (dAvg2 >= 2 * kAvg2) {
        console.log(`The Dolphins win! 🏆`);
    } else if (kAvg2 >= 2 * dAvg2) {
        console.log(`The Koalas win! 🏆`);
    } else {
        console.log(`No team wins.`)
    }
};


const winner = console.log(checkWinner2(dAvg2, kAvg2));

checkWinner2(dAvg2, kAvg2);
checkWinner2(576, 111);




// PART 2 - FUNDAMENTALS : Assignments and Practice

// let population = 36678090;

let country;
let population;
let capitalCity;



// As a FUNCTION DECLARATION

function describeCountry1(country, population, capitalCity) {
    const description = `${country} has ${population} people and its capital city is ${capitalCity}`
    return description;
}

const canada = describeCountry1('Canada', 36678090, 'Ottawa');
const russia = describeCountry1('Russia', 146171015, "Moscow");
const usa = describeCountry1('USA', 334334217, "Washington, DC");
const china = describeCountry1('China', 1441000000, "Beijing");

console.log(canada);
console.log(russia);
console.log(usa);
console.log(china);

// This Works




// As a FUNCTION EXPRESSION

const describeCountry2 = function (country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const canada1 = describeCountry2("Canada", 36991981, 'Ottawa');
const russia1 = describeCountry2('Russia', 146171015, "Moscow");
const usa1 = describeCountry2('USA', 334334217, "Washington, DC");
const china1 = describeCountry2('China', 1441000000, "Beijing");


console.log(canada1);
console.log(russia1);
console.log(usa1);
console.log(china1);

// This works



// A FUNCTION DECLARATION

const worldPopulation = 7900000000;

function percentageOfTheWorld1(population) {

    const percentage = (population / worldPopulation) * 100
    return `This country represents ${percentage} percent of the worlds population.`;

}

const canadasPercentage = percentageOfTheWorld1(36991981);
const usasPercentage = percentageOfTheWorld1(334334217);
const russiasPercentage = percentageOfTheWorld1(146171015);
const chinasPercentage = percentageOfTheWorld1(1441000000);

console.log(canadasPercentage);
console.log(russiasPercentage);
console.log(usasPercentage);
console.log(chinasPercentage);

// This works



// A FUNCTION EXPRESSION

const percentageOfTheWorld2 = function (population) {

    const percentage = (population / worldPopulation) * 100;
    return `This country has ${percentage} percent of this earths population.`;

}

const canada2 = percentageOfTheWorld2(36991981);
const usa2 = percentageOfTheWorld2(334334217);
const russia2 = percentageOfTheWorld2(146171015);
const china2 = percentageOfTheWorld2(1441000000);

console.log(canada2);
console.log(usa2);
console.log(russia2);
console.log(china2);

// This works


// A ARROW FUNCTION

const percentageOfTheWorld3 = population => (population / worldPopulation) * 100;

const canada3 = percentageOfTheWorld3(36991981);
const usa3 = percentageOfTheWorld3(334334217);
const russia3 = percentageOfTheWorld3(146171015);
const china3 = percentageOfTheWorld3(1441000000);


console.log(canada3);
console.log(usa3);
console.log(russia3);
console.log(china3);

// This works


const describeCountry3 = (country, population) => `${country} has ${population} million people, which is about ${percentage} of the world.`;

// This works


// // IDEA : for coding. Have a keyword, or command that can autocomplete the array by guessing. Such as [`Chin` for China would suggest and quickly complete if told to [China], in a list of nations.




function describePopulation(country, population) {
    return `${country} has ${population} people in it.`;
}

const canada4 = describePopulation("Canada", 36991981);
const usa4 = describePopulation("USA", 334334217);
const russia4 = describePopulation("Russia", 146171015);



console.log(canada4);
console.log(usa4);
console.log(russia4);

// This works




// ARRAYS

const populations = [36991981, 334334217, 146171015, 1441000000];

if (populations.length - 1 === 4) {
    console.log(true);
} else {
    console.log(false);
};




// CODING CHALLENGE 2 - Arrays (Tip Calculator)

function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill
    return tip;
}

// this works

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
}

// this also works and is simplified

console.log(calcTip(100));


const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2]),];

console.log(bills);
console.log(tips);
console.log(totals);

// this works




const calcTipExpress = function (bill) {
    const tip = bill >= 50 & bill <= 300 ? 0.15 * bill : 0.20 * bill;
    return tip;
}

const newTip = console.log(calcTipExpress(100));

// this works




const calcTipArrow = (bill) => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

const newNewTip = console.log(calcTipArrow(100));




// CODING CHALLENGE #3 - Reviw of Objects

// TEST DATA =

// MARK - 78 kg, 1.69 m tall

// JOHN - 92 kg, 1.95 m tall

const markObject = {

    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};


const johnObject = {

    fullName: "John Smith",
    mass: 92, // try 992
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};


console.log(johnObject.calcBMI());
console.log(markObject.calcBMI());


console.log(markObject, johnObject);

/* I didn't understand the 'getSummary' part of the assignment fully. 

I attempted an outside of object function expression containing the string, it didn't compute properly. I used a conditional. 

I attempted adding the 'getSummary' function as a property in the object, that also didn't compute properly. I used a conditional.

*/




// WITH TEACHER

markObject.calcBMI();
johnObject.calcBMI();

console.log(markObject.bmi, johnObject.bmi);

// if (markObject.bmi > johnObject.bmi ? console.log(`Mark has the greater BMI score at ${markObject.bmi}`) : console.log(`John has the greater BMI score at ${johnObject.bmi}`));

if (markObject.bmi > johnObject.bmi) {

    console.log(`${markObject.fullName} has the greater BMI score at (${markObject.bmi}) than that of ${johnObject.fullName} at (${johnObject.bmi})`)

} else if (markObject.bmi === johnObject.bmi) {

    console.log(`Both ${markObject.fullName} and ${johnObject.fullName} have equivalent scores.`)
} else {

    console.log(`${johnObject.fullName} has the greater BMI score at (${johnObject.bmi}) than that of ${markObject.fullName} at (${markObject.bmi}).`)
};

// this works




// ASSIGNMENTS & PRACTICE

const myCountry = {

    country: 'Canada',
    capital: 'Ottawa',
    language: 'English',
    population: 40,
    neighbours: ['USA', 'Greenland'],

    describe: function () {
        console.log(
            `${this.country} has almost ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries, and a capital named ${this.capital}.`
        );
    },

    checkIsland: function () {

        // this.isIsland = !Boolean(this.neighbours.length); // this works
        this.isIsland = this.neighbours.length === 0 ? true : false;   // this works
    },
}


myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
console.log(myCountry.isIsland);


const myCountryString = `${myCountry.country} has almost ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital named ${myCountry.capital}.`;

console.log(myCountryString);


myCountry.population = [6];
myCountry.population += 2; // this is the way the teacher did it, dot notation

let newpopulation = (myCountry.population--);

myCountry['population'] -= 2; // this is the way the teacher did it, bracket notation



myCountry.describe(myCountry); // string description of Country 

console.log(myCountry.checkIsland(myCountry)); // calling the 'checkIsland' function and seeing it in the console

console.log(myCountry); // full object in console




// ITERATION : The for Loop


for (let vote = 0; vote <= 50; vote++)
    console.log(`Voter number ${vote} is currently voting`);





// LOOPING, ARRAYS, BREAKING, CONTINUING

const worldPopulation = 7900000000;

const populations = [36991981, 334334217, 146171015, 1441000000];


let percentages2 = [];


const percentageOfTheWorld1 = function (population) {
    return population / worldPopulation * 100;
}

for (let i = 0; i < populations.length; i++) {
    const percentage = percentageOfTheWorld1(populations[i]);
    percentages2.push(percentage);
    console.log(`This country represents ${percentage} percent of the worlds population.`);

}

// this works!




const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];



for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let y = 0; y < listOfNeighbours[i].length; y++) {

        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

// this works




// the WHILE loop

const worldPopulation = 7900000000;

const populations = [36991981, 334334217, 146171015, 1441000000];


const percentageOfTheWorld1 = function (population) {
    return population / worldPopulation * 100;
}

let percentages3 = [];

let i = 0;
while (i < populations.length) {
    const percentage = percentageOfTheWorld1(populations[i]);
    percentages3.push(percentage);
    console.log(`This country represents ${percentage} percent of the worlds population.`);
    i++;
}