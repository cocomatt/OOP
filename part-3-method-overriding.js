'use strict';

class Person {
  static species() {
    return 'Homo sapien';
  }
  static speciesSentence() {
    return `Humans are classified as ${this.species()}.`;
  }
  constructor(realFirstName, realLastName) {
    this.realFirstName = realFirstName;
    this.realLastName = realLastName;
    this.hasSpecialPower = false;
  }
  bio() {
    return `My name is ${this.realFirstName} ${this.realLastName}.`;
  }
  setFirstRealName(realFirstName) {
    this.realFirstName = realFirstName;
  }
  setLastRealName(realLastName) {
    this.realFirstName = realLastName;
  }
}

let person1 = new Person('Peter', 'Parker');
console.log('Person1: ', person1);
console.log(Person.speciesSentence());
console.log(person1.bio());

class SuperHero extends Person {
  static species() {
    return 'Homo sapien with a little extra'
  }
  static speciesSentence() {
    return `Superheros are classified as ${this.species()}.`;
  }
  constructor(firstName, lastName, alterEgo) {
    super(firstName, lastName);
    this.alterEgo = alterEgo;
    this.hasSpecialPower = true;
  }
  bio() {
    return `${super.bio()} I have a secret though.`;
  }
  saySuperHeroName() {
    return `My alter ego is ${this.alterEgo}. Shh! Don\'t tell anyone.`
  }
  setAlterEgo(alterEgo) {
    this.alterEgo = alterEgo;
  }
}

let person2 = new Person('Mary Jane', 'Watson');
console.log('Person2: ', person2)
console.log(person2.bio());

let superHero1 = new SuperHero('Peter', 'Parker', 'Spiderman');
console.log('superHero1: ', superHero1);
console.log(SuperHero.speciesSentence());
console.log(superHero1.bio());
console.log(superHero1.saySuperHeroName());
