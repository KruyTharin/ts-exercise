//  Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
//  Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.

export class Bus {
  make: string = "";
  model: string = "";
  year: number = 0;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Bus is starting");
  }
}

//  Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.

class Car {
  make: string = "";
  model: string = "";
  year: number = 0;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

export class SUV extends Car {
  suitable: boolean = false;
  constructor(make: string, model: string, year: number, suitable: boolean) {
    super(make, model, year);
    this.suitable = suitable;
  }

  toggle() {
    if (this.suitable) {
      console.log(`This ${this.model} car suitable for off-road`);
    } else {
      console.log(`This ${this.model} car not suitable for off-road`);
    }
  }
}
const suv = new SUV("Henry Ford", "Rapter", 2023, false);
console.log(suv.toggle());

// 4. Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details.

// Define a class 'Engine'
export class Engine {
  // Properties
  horsepower: number;
  fuelType: string;

  // Constructor for Engine
  constructor(horsepower: number, fuelType: string) {
    this.horsepower = horsepower;
    this.fuelType = fuelType;
  }
}

// Modify the 'Car' class to include an 'Engine' instance
export class Car1 {
  // Properties
  make: string;
  model: string;
  year: number;
  engine: Engine; // Include an 'Engine' instance as a property

  // Constructor for Car
  constructor(make: string, model: string, year: number, engine: Engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
  }

  // Method to start the car
  start() {
    console.log(
      `The ${this.make} ${this.model} (Year: ${this.year}) is starting.`
    );
  }

  // Method to print car and engine details
  printCarDetails() {
    console.log(`Car Details:`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Engine Details:`);
    console.log(`Horsepower: ${this.engine.horsepower}`);
    console.log(`Fuel Type: ${this.engine.fuelType}`);
  }
}

// Create an 'Engine' object
// Create a 'Car' object with the 'Engine' instance
// Call the start method to start the car
// Print car and engine details
const myEngine = new Engine(200, "Gasoline");
const myCar = new Car1("Audi", "A3", 2023, myEngine);
myCar.start();
myCar.printCarDetails();
