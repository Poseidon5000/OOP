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

blessing.calcAge();

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

console.log(account.latest);
account.latest = 50;

console.log(account.movements);

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
    console.log(2023 - this.birthYear);
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
console.log(jessica);