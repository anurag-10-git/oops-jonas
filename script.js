'use strict';

/*const Person = function(firstName, birthYear) {
//   console.log(this);//this returns the constructor

this.firstName = firstName;
this.birthYear = birthYear;

this.calcAge = function() {
    console.log(2037-this.birthYear);
}
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


//class expression
// const PersonCl = class {

// }

//decleration
class PersonCl {
        constructor(fullName, birthYear){
           this.fullName = fullName;
           this.birthYear = birthYear;
        }

        calcAge() {
           console.log(2037-this.birthYear);
        }

        get age() {
                return 2037-this.birthYear;
        }

        set fullName(name){
           if(name.includes(' ')){
                this._fullName = name;
           }
           else{
              alert(`${name} is not a full name`);  
           }
        }

        greet() {
                console.log(`Hey ${this.firstName}`);  
             }
}

const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica.__proto__.hasOwnProperty('calcAge'));
jessica.calcAge();

jessica.greet();

const account = {
        owner: 'Jonas',
        movements: [200,500,120,300],

        get latest() {
            return this.movements.slice(-1).pop();    
        },

        set latest(mov){
          this.movements.push(mov);
        },

        get fullName() {
         return this._fullName;
        }
}

console.log(account.latest);

account.latest= 50;

console.log(jessica.age);
console.log(jessica); */


/*class PersonCl {
        constructor(firstName, birthYear) {
                //   console.log(this);//this returns the constructor
                this.firstName = firstName;
                this.birthYear = birthYear;
        }

                calcAge(){
                        console.log(2037 - this.birthYear);
                };

                greet() {
                        console.log(`Hey ${this.firstName}`);  
                }

                get age(){
                        return 2037 -this.birthYear;
                }

                set fullName(name){
                        if(name.includes(' ')){
                                this._fullName = name;
                           }
                           else{
                              alert(`${name} is not a full name`);  
                           } 
                }

                get fullName() {
                        return this._fullName;
                       }

                static hey() {
                        console.log(`Hey there 👋🏻`);
                }       
        }   

class StudentCl extends PersonCl{
 constructor(fullName, birthYear, course)
}*/


/*const Person = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
        console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear,course){
        Person.call(this,firstName,birthYear);
        this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const mike = new Student('Mike', 2020, 'Computer Science');

console.log(mike);

mike.introduce();

Student.prototype.constructor = Student;
console.log(Student.prototype);

mike.calcAge();*/

// const Car = function(make, speed) {
//         this.make = make;
//         this.speed = speed;
// }

// const electricCar = function(make,speed,battery) {
//    Car.call(this,make,speed);
//    this.battery = battery; 

//    this.chargeBattery = function(chargeTo){
//       this.battery+=chargeTo;
//    }
// }

// electricCar.prototype = Object.create(Car.prototype);

// const Tesla = new electricCar('Tesla',300, 100);

// console.log(Tesla);

// Tesla.chargeBattery(30);

// console.log(Tesla);

// class PersonCl {
//         constructor(firstName, birthYear) {
//                 //   console.log(this);//this returns the constructor
//                 this.firstName = firstName;
//                 this.birthYear = birthYear;
//         }

//                 calcAge(){
//                         console.log(2037 - this.birthYear);
//                 };

//                 greet() {
//                         console.log(`Hey ${this.firstName}`);  
//                 }

//                 get age(){
//                         return 2037 -this.birthYear;
//                 }

//                 set fullName(name){
//                         if(name.includes(' ')){
//                                 this._fullName = name;
//                            }
//                            else{
//                               alert(`${name} is not a full name`);  
//                            } 
//                 }

//                 get fullName() {
//                         return this._fullName;
//                        }

//                 static hey() {
//                         console.log(`Hey there 👋🏻`);
//                 }       
//         }   


// class StudentCl extends PersonCl {
//         constructor(firstName,birthYear,course){
//                 super(firstName,birthYear);
//                 this.course = course;
//         }
// }

// let anurag = new StudentCl('Anurag','Mohan','BCA');

// console.log(anurag);

// const PersonProto = {
//         calcAge(){
//                 console.log(2037-this.birthYear);
//         },

//         init(firstName, birthYear) {
//                 this.firstName = firstName;
//                 this.birthYear = birthYear;
//         },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName,birthYear, course){
//         PersonProto.init.call(this, firstName, birthYear)
//                 this.course = course;
// }

// StudentProto.introduce = function() {
//         console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
// const jay = Object.create(StudentProto);

// jay.init('Jay',2010,'Computer Science');

// console.log(jay);

// jay.introduce();
// jay.calcAge();

class Account {
        //public fields
        locale = navigator.language; //they are not in the prototype they are in the instances they are exactly same as before


        //Private fields
        #movements = [];
        #pin;

        constructor(owner, currency, pin){
                this.owner = owner;
                this.currency = currency;
                this.#pin= pin;
                //protected
                // this._movements = [];
                // this.locale=navigator.language;
                console.log(`thanks for opening an account, ${owner}`);
        }
        
        //Public interface
        deposit(val){
                this.#movements.push(val);
        }
        withdrawal(val){
                this.deposit(-val);
        }

        requestLoan(val){
                if(this._approveLoan(val)){
                        this.deposit(val);
                        console.log(`Loan approved`);
                }
        }

        //private methods
        
        // #approveLoan(val){
        _approveLoan(val){
                return true;
        }
}

const acc1 = new Account('Jonas','EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1);


// console.log(acc1.#movements);
