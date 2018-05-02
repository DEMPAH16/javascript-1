'use strict';

function helloWorld() {
    console.log('Hello, World!');
}

helloWorld();

function greeting(name) {
    // blah = 'assigned';
    console.log('Hello, ' + name + '!');
}

greeting('Taylor');
greeting('Brad');
greeting('Simon');
greeting('Devin');
greeting('et al');

function makeGreeting(name) {
    return 'Hello, ' + name + '!';
}

var taylorGreeting = makeGreeting('Taylor');//?


taylorGreeting

function makeIntlGreeting(name, lang/*, ...args*/) {
    // console.log(args);
    // console.log(arguments);
    if (lang == 'en') {
        // blah = 45;
        let englishGreeting = 'Hello, ' + name + '!';
        return englishGreeting;
    }
    else if (lang == 'sp' || lang == 'es') {
        return 'Hola, ' + name + '!';
    }
    else if (lang == 'ru') {
        return 'Privyet, ' + name + '!';
    }
    
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    
    // i//? // Error!
    
    // englishGreeting;
    
    foo = 42;
    
    foo;//?
    
    var foo = 'bar';//?
    
    secondIntlGreeting();
    
    function secondIntlGreeting() {
        // var foo;
        
        foo
        
        console.log(name, lang);
    }
    
    return 'This kind of greeting hasn\'t been implemented yet\t \n';
}

// name;
// lang;

var simon = 'Simon';

makeIntlGreeting(simon, 'en');//?
makeIntlGreeting(simon, 'es');//?
makeIntlGreeting(simon, 'sp');//?
makeIntlGreeting(simon, 'ru')
console.log(makeIntlGreeting(simon, 'fr'));


blah