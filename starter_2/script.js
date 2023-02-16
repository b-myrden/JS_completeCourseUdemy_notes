// SECTION 3

'use strict';


const calcAge = function(birthYear){
    return 2037 - birthYear;
}


const firstName = 'Steve'

const yearsUntilRetirement = function (birthYear, firstName){
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years.`;
}



