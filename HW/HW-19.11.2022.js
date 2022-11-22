"strict";
// TASK 01 "The Developer and Manager objects should reuse the Person Constructor and should inherit from Person the greet method!"
//Create a Person Constructor
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.greet = function () {
  console.log(`'Hi, I'm ${this.name} and I'm ${this.age} years old'`);
};

const person1 = new Person("Pesho", 21);
person1.greet();

//Create a Developer Constructor

const Developer = function (name, age, skillstet) {
  Person.call(this, name, age);
  this.skillstet = skillstet;
};

Developer.prototype = Object.create(Person.prototype);
const dev1 = new Developer("Gesho", 35, ["JavaScript", "Phyton", "C#"]);
dev1.greet();

// Create a Manager Constructor

const Manager = function (name, age, managed) {
  Person.call(this, name, age);
  this.managed = managed;
};
Manager.prototype = Object.create(Person.prototype);
const manager1 = new Manager("Gero", 29, dev1.name);

manager1.greet();

// -----------------------------------------------------------------

// TASK 02 "Overwrite the greet() method for Developer and Manager objects, such that the same code execution as given in the previous task template will produce next output:"
Developer.prototype.greet = function () {
  console.log(
    `My name is ${this.name} and I am ${this.age} years old and I know ${this.skillstet[0]}, ${this.skillstet[1]} and ${this.skillstet[2]}.`
  );
};

dev1.greet();
Manager.prototype.greet = function () {
  console.log(
    `My name is ${this.name} and I am ${this.age} years old. I manage ${this.managed}.`
  );
};
manager1.greet();
