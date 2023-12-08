//  Write a TypeScript program that creates an abstract class called Shape with properties like color and an abstract method getPerimeter(). Implement derived classes for specific shapes (e.g., Circle, Rectangle) that extend Shape and provide concrete implementations for calculating their perimeters.

abstract class Shape {
  color: string = "";
  constructor(color: string) {
    this.color = color;
  }

  abstract getPerimeter(radius: number): number;
}

class Circle1 extends Shape {
  static pi: number = 3.14;
  radius: number = 0;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getPerimeter(): number {
    return 2 * Circle1.pi * this.radius;
  }
}

class Rectangle1 extends Shape {
  width: number = 0;
  length: number = 0;

  constructor(color: string, width: number, length: number) {
    super(color);
    this.width = width;
    this.length = length;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.length);
  }
}

const circle1 = new Circle1("pink", 2);
console.log(circle1.getPerimeter());

const rectangle1 = new Rectangle1("pink", 10, 12);
console.log(rectangle1.getPerimeter());

//  Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each animal makes.

abstract class Animal1 {
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): string;
}

class Tiger1 extends Animal1 {
  sound: string = "";

  constructor(name: string, sound: string) {
    super(name);
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} make this sound ${this.sound}`;
  }
}

const tiger1 = new Tiger1("tiger", "hhaahha");
console.log(tiger1.makeSound());

// Write a TypeScript program that defines an abstract class Employee with properties such as name, employeeId, and an abstract method calculateSalary(). Create derived classes (e.g., FullTimeEmployee, PartTimeEmployee) that extend Employee and provide salary calculation logic based on employment type.

// Abstract class Employee
abstract class Employee1 {
  constructor(public name: string, public employeeId: number) {}

  // Abstract method for calculating salary
  abstract calculateSalary(): number;
}

// Derived class FullTimeEmployee
class FullTimeEmployee extends Employee1 {
  constructor(name: string, employeeId: number, private monthlySalary: number) {
    super(name, employeeId);
  }

  // Implement the calculateSalary method for FullTimeEmployee
  calculateSalary(): number {
    return this.monthlySalary;
  }
}

// Derived class PartTimeEmployee
class PartTimeEmployee extends Employee1 {
  constructor(
    name: string,
    employeeId: number,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name, employeeId);
  }

  // Implement the calculateSalary method for PartTimeEmployee
  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

// Create instances of FullTimeEmployee and PartTimeEmployee
const fullTimeEmployee = new FullTimeEmployee("Veerle Brock", 105, 6000);
const partTimeEmployee = new PartTimeEmployee("Alaya Neha", 104, 15, 40);

// Calculate and print salaries
console.log(
  `Full-Time Employee ${
    fullTimeEmployee.name
  }'s Salary: $${fullTimeEmployee.calculateSalary()}`
);
console.log(
  `Part-Time Employee ${
    partTimeEmployee.name
  }'s Salary: $${partTimeEmployee.calculateSalary()}`
);

// Geometric Shapes:
// Write a TypeScript program that creates an abstract class GeometricShape with properties like name and abstract methods for calculating area and perimeter. Implement derived classes for specific shapes (e.g., Circle, Rectangle, Triangle) that extend GeometricShape and provide concrete implementations for area and perimeter calculations.

// Abstract class GeometricShape
abstract class GeometricShape {
  constructor(public name: string) {}

  // Abstract method for calculating area
  abstract calculateArea(): number;

  // Abstract method for calculating perimeter
  abstract calculatePerimeter(): number;
}

// Derived class Circle
class Circle extends GeometricShape {
  constructor(public name: string, private radius: number) {
    super(name);
  }

  // Implement the calculateArea method for Circle
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  // Implement the calculatePerimeter method for Circle
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Derived class Rectangle
class Rectangle extends GeometricShape {
  constructor(
    public name: string,
    private width: number,
    private height: number
  ) {
    super(name);
  }

  // Implement the calculateArea method for Rectangle
  calculateArea(): number {
    return this.width * this.height;
  }

  // Implement the calculatePerimeter method for Rectangle
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Derived class Triangle
class Triangle extends GeometricShape {
  constructor(
    public name: string,
    private base: number,
    private height: number
  ) {
    super(name);
  }

  // Implement the calculateArea method for Triangle
  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  // Implement the calculatePerimeter method for Triangle (Assuming it's an equilateral triangle)
  calculatePerimeter(): number {
    return 3 * this.base;
  }
}

// Create instances of Circle, Rectangle, and Triangle
const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4, 6);
const triangle = new Triangle("Triangle", 3, 4);

// Calculate and print area and perimeter
console.log(
  `${
    circle.name
  } - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);
console.log(
  `${
    rectangle.name
  } - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);
console.log(
  `${
    triangle.name
  } - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`
);
