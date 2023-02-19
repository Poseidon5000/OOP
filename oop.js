'use strict'
// ABSTRACTION, ENCAPULSATION, INHERITANCE, POLYMORPHISM.

//Creating objects in OOP (blueprints to which other object is created)

function person (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
}
const poseidon = new person("Okon", 1990);

//USING PROTOTYPES

person.prototype.calcAge = function(){
  return 2023- this.birthYear;
}

person.prototype.species = "homo sapiens"
// console.log(poseidon.__proto__ === person.prototype);
// console.log(poseidon.__proto__);
// console.log(person.prototype.isPrototypeOf(poseidon));

console.log(poseidon.species);


console.log(poseidon.calcAge())




const troy = new person("Gospel", 2000);

let arr = [3, 5, 7, 3, 2, 8, 9, 2, 1, 0, 3]


Array.prototype.addMore = function(){
    return this.map((add) => add + 1 )
}


console.log(arr.addMore())



