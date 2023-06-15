"use strict";
// ABSTRACTION, ENCAPULSATION, INHERITANCE, POLYMORPHISM.

//Creating objects in OOP (blueprints to which other object is created)

function Person(firstName, birthYear) {
  //i.Instance properties

  this.firstName = firstName;
  this.birthYear = birthYear;

  //iii. methods(never do this cos it will be copied to every object created, instead use prototype)
  // this.calcAge = function(){
  //     console.log(2023 - this.birthYear);}
}
const poseidon = new Person("Okon", 1990);

// when you call on the new contructor with a function, 4 things happen
//1. new {} is created
//2.the this points to that object which now has the function name
//3.{} is linked to the prototype(creates proto property)
//4. function now returns the {}

const arial = new Person("arial", 2000);

// console.log(poseidon);
// console.log(arial);

//ii.checking instances
// console.log(poseidon instanceof Person);

//iv. USING PROTOTYPES(prototype is an object that is attached to every function in JS)
//all object created from a constructor function will inherit all the methods and properties from the prototype property


//adding methods to prototype
Person.prototype.calcAge = function () {
  console.log( 2023 - this.birthYear );
};

// console.log(Person.prototype);


//adding properties to prototype

Person.prototype.species = "homo sapiens";

// console.log(poseidon.hasOwnProperty("firstName"));
// console.log(poseidon.hasOwnProperty("species"));

//demonstrating prototypical inheritance

// console.log(poseidon.species);

// poseidon.calcAge()


//each object has a property called __proto__

// console.log(poseidon.__proto__ === Person.prototype);
// console.log(poseidon.__proto__);
// console.log(person.prototype.isPrototypeOf(poseidon));



const troy = new Person("Gospel", 2000);

let arr = [3, 5, 7, 3, 2, 8, 9, 2, 1, 0, 3];

// console.dir()

// console.log(Array);

// Creating a default array method
Array.prototype.addMore = function () {
  return this.map((add) => add + 1);
};

// console.log(arr.addMore());

const arr1 = [5, 7, 8, 3, 2];

// console.log(arr1.addMore());

//USING CLASSES

class detail {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //adding methods to prototype

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  //getters and setters in classes

  get age() {
    return 2023 - this.birthYear;
  }
}

const blessing = new detail("Blessing", 1990);

// blessing.calcAge();

// console.log(blessing.age);

// Classes are not hoisted
// Classes are done in strict mode
//Classes are first class citizens

//setters and getters
//in regular objects
const account = {
  owner: "Okon",
  movements: [200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}

// console.log(account.latest);
account.latest = 50;

// console.log(account.movements);

//static methods  (methods attached to the class and not the prototype)
// static methods are not inherited by the instances
// static methods are utility functions that are not specific to a particular object

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance methods
  calcAge() {
    console.log(`I am ${2023 - this.birthYear} years old`);
  }

  //setting properties that already exist

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);

//from is a not a prototype method but a static method
//static methods
//array.from is a static method
//static methods are not inherited by the instances
//static methods can be created using the static keyword





//object.create()

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  //Add all the methods you want to be inherited here

  init(firstName, birthYear){
    this.firstName=firstName;
    this.birthYear = birthYear
  }
};

const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);

sarah.init('sarah', 1980)
sarah.calcAge();

// console.log(sarah);

//`

// class Car{
//   constructor(make, speed){
//     this.make = make
//     this.speed = speed
//   }

//   accelerate(){
//     this.speed +=10
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }

//   brake(){
//     this.speed -= 5
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }

//   set newSpeed(speed){
//    this.speed = speed * 1.6
//   }

//   get newSpeed(){
//     return this.speed/1.6
//   }
// }

// const newCar = new Car("ferrari", 100)

// console.log(newCar);

//INHERITANCE BETWEEN CLASSES

// function Student(firstName, birthYear, course){
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and i study ${this.course} `);
// }

// const mike = new Student("Mike", 2000, "Human Anatomy")

// console.log(mike);
// mike.introduce()
// Student.prototype.constructor = Student
// // mike.calcAge()
// // console.log(mike.__proto__.__proto__);
// console.dir(Student.prototype.constructor);

// const Car = function(make, speed){
//   this.make = make
//   this.speed = speed;
  
// }

// Car.prototype.accelerate = function(){
//   this.speed  += 10
//   console.log(`${this.make} is going at ${this.speed} km/hr`);
// }


// Car.prototype.brake = function(){
//   this.brake += 5;
//   console.log(`${this.make} is going at ${this.speed} km/hr`);

// }

// const EV = function (make, speed, charge){
//   Car.call(this, make, speed);
//   this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo
// };


// EV.prototype.accelerate= function(){
//   this.speed += 20;
//   this.charge--;

//   console.log(`${this.make} is going at ${this.speed} km/hr with a ${this.charge} charge`);
  
// }

// const tesla = new EV("tesla", 120, 23)

// console.log(tesla);
// tesla.accelerate()
// tesla.accelerate()

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course){

//     //Needs to happen first
//     super(fullName, birthYear)
//     this.course = course
//   }

//   introduce(){
//     console.log(`my name is ${this.fullName} and study ${this.course}`);
//   }

//   // calcAge(){
//   //   console.log(`i am ${2030- this.birthYear} old`);
//   // }
// }

// const martha = new StudentCl ("Marth Jones", 2012, "computer science")

// console.log(martha);
// martha.introduce()
// martha.calcAge()

//Inheriting using object.create

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
    this.course = course
  
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
}


const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer science')
jay.introduce();


//other class examples

class Example{
  constructor(owner, currency, pin, movements){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.#movements = [];

    //Protected data is assigned using underscore
    //Private data is assigned using #


    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //good practice
  deposit(val){
    this.movements.push(val)
  }

  withdraw(val){
    this.deposit(-val)
  }
}

const acc1 = new Example('Jonas', "USD", 111)
//Bad practice
// acc1.movements.push(250);
// acc1.movements.push(-141)

acc1.deposit(250)
acc1.withdraw(140)

console.log(acc1.#movements);

console.log(acc1);