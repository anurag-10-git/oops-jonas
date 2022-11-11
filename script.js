'use strict';

const Person = function(firstName, birthYear) {
//   console.log(this);//this returns the constructor

this.firstName = firstName;
this.birthYear = birthYear;

// this.calcAge = function() {
//     console.log(2037-this.birthYear);
// }
}


const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1.an new empty object is created 
//2.function is called, this(points to newly created object) keyword is set to the newly created object
//3.linked to a prototype
//4. function automatically return a new object

const matilda = new Person('Matilda', 2017);
console.log(matilda);

// Prototypes
Person.prototype.calcAge =  function() {
        console.log(2037-this.birthYear);
}

console.log(Person.prototype);
console.log(Object.getPrototypeOf(Person));
console.log(Object.getPrototypeOf(matilda));

jonas.calcAge();
console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.prototype);

console.log(Person.prototype === jonas.__proto__);

Person.prototype.species = 'Homo sapiens';

console.log(jonas.species);