
function greeting(name) {
    return 'Hello, ' + name;
}

//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

var newGreeting = function(name) {
    return 'Hello, ' + name;
};

// Given an array of user objects, update the user's email property if the condition is met.

// For example:
// var user0 = {
//  name: 'James',
//  email: null,
//  flag: true
// }

// updateUserEmail([ user0 ], 'flag', true, 'email@domain.com'); -> [{ name: 'James', email: 'email@domain.com', flag: true }]

function updateUserEmail( array, property, value, newEmail ) {
    for( var i = 0; i < array.length; i++ ) {
        array[i]//?
        property//?
        array[i][property];//?
        
        if ( array[i][property] === value ) {
            array[i].email = newEmail;
        }
    }
    
    return array;
}

var user0 = {
    name: 'James',
    email: null,
    flag: true
}

updateUserEmail([ user0 ], 'flag', true, 'email@domain.com');//?