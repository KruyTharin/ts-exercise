// 9. Write a TypeScript class called Animal with properties name and species. Implement a constructor that initializes these properties when an Animal object is created. Next, create a derived class Tiger that extends Animal. Add a method roar() to the Tiger class that prints a message indicating that the tiger is roaring.

class Animal {
  name: string = "";
  species: string = "";

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
}

class Tiger extends Animal {
  roar() {
    console.log(`${this.name} is roaring`);
  }
}

const tiger = new Tiger("tiger", "wild animal");
console.log(tiger.roar());

//  Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to include an additional property employeeId.

class Person {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  employeeId: number = 0;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age);
    this.employeeId = employeeId;
  }
}
