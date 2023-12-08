//  Write a TypeScript program that creates a class called Student with properties name and roll number. Add constructor overloading to support multiple ways of initializing a Student object. Implement one constructor that takes both name and roll number as parameters and another constructor that takes only name, assuming the roll number is unknown.

export class Student {
  // Properties
  name: string;
  rollNumber: number | undefined;

  constructor(name: string, rollNumber?: number) {
    this.name = name;
    this.rollNumber = rollNumber;
  }
}

// Create Student objects using different constructors
const studentWithRollNumber = new Student("Mateo Ishita", 11);
const studentWithoutRollNumber = new Student("Dvsch Gbjpiij");

// Access and print the properties
console.log("Student with Roll Number:");
console.log("Name:", studentWithRollNumber.name);
console.log("Roll Number:", studentWithRollNumber.rollNumber);

console.log("\nStudent without Roll Number:");
console.log("Name:", studentWithoutRollNumber.name);
console.log("Roll Number:", studentWithoutRollNumber.rollNumber); // This will be undefined

//  Write a TypeScript class called Shape with properties like color. Implement a constructor that initializes the color property when a Shape object is created. Then, create a derived class Circle that extends Shape. Implement a constructor for the Circle class that takes color and radius as parameters and initializes them along with the color property of the base class.

class Shape {
  color: string = "";

  constructor(color: string) {
    this.color = color;
  }
}

export class Circle extends Shape {
  radius: number = 0;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
}

// Create Circle Object that extends from shape
const circle = new Circle("pink", 10);
console.log(circle);

//  Write a TypeScript class called Student with properties name and age. Implement a constructor that initializes these properties when a Student object is created. Additionally, add validation to ensure that the age provided is a positive number. If the age is not positive, set it to a default value of 0.
class Student1 {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age > 0 ? age : 0;
  }
}

const student = new Student1("Rin", -1);
console.log(student);
