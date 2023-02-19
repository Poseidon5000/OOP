'use strict'
// ABSTRACTION, ENCAPULSATION, INHERITANCE, POLYMORPHISM.

function person (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
}

person.prototype.calcAge = function(){
  return 2023- this.birthYear;
}

const poseidon = new person("Okon", 1990);
console.log(poseidon.calcAge())




const troy = new person("Gospel", 2000);







