//Write a TypeScript class called BankAccount with the following properties and methods:
// private accountNumber: string
// protected balance: number

class Student {
  private name: string;
  protected studentId: number;

  constructor(name: string, studentId: number) {
    this.name = name;
    this.studentId = studentId;
  }

  public displayInfo(): void {
    console.log(`Student Name: ${this.name}, Student ID: ${this.studentId}`);
  }
}

class AbroadStudent extends Student {
  constructor(name: string, studentId: number, private country: string) {
    super(name, studentId);
  }

  public displayInfo2() {
    console.log(`${this.country} ${this.studentId}`);
  }
}

// Example usage:
const student = new Student("Piri Lily", 12);
student.displayInfo();

const student2 = new AbroadStudent("Piri Lily", 12, "cambodia");
console.log(student2.displayInfo2());
