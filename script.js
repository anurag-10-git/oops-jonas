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
console.log(Object.getPrototypeOf(matilda));

jonas.calcAge();
console.log(jonas.__proto__);
console.dir(jonas.prototype);

console.log(Person.prototype === jonas.__proto__);

Person.prototype.species = 'Homo sapiens';

console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype);
console.dir(Object.getPrototypeOf(Person));

Array.prototype.unique = function() {
        return [...new Set(this)];
}


// console.log([1,1,2,2,2,2,3,3,3].unique());

// function onlyUnique(value, index, self) {
//         console.log(self.indexOf(value),index);
//         return self.indexOf(value) === index;
//       }
      
//       // usage example:
//       var a = [1,1,2,2,2,2,3,3,3];
//       var unique = a.filter(onlyUnique);
      
//       console.log(unique); 

const Car = function(make, speed) {
        this.make = make;
        this.speed = speed;
}

Car.prototype.accelerate = function() {
        this.speed+=10;
        console.log(`the speed of ${this.make} after acceleration ${this.speed} kmph`);
}

Car.prototype.brake = function() {
        this.speed-=5;
        console.log(`the speed of ${this.make} after brake ${this.speed} kmph`);
}

let car1 = new Car('BMW', 120);
let car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();