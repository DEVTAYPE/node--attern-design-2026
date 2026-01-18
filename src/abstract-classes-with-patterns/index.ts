/* 
DIFERENCIA ENTRE CLASES ABSTRACTAS
Y CLASES NORMALES

- Las clases abstractas pueden tener métodos con implementación,
  mientras que las clases normales deben implementar todos sus métodos.

- Las clases abstractas no pueden ser instanciadas directamente,
  mientras que las clases normales sí pueden ser instanciadas.

- Las clases abstractas pueden contener métodos abstractos (sin implementación)
  que deben ser implementados por las clases derivadas,
  mientras que las clases normales no pueden tener métodos abstractos.
*/

abstract class Employee {
  constructor(
    private name: string,
    private lastName: string,
  ) {}

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  // Obligar a las clases hijas a implementar este método
  abstract getSalary(): number;

  finalCompensation(): string {
    return `El empleado ${this.fullName} tiene un salario de ${this.getSalary()}`;
  }
}

// Implementar la clase abstracta
class FullTimeEmployee extends Employee {
  constructor(
    name: string,
    lastName: string,
    private salary: number,
  ) {
    super(name, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

// Implementar la clase abstracta
class PartTimeEmployee extends Employee {
  constructor(
    name: string,
    lastName: string,
    private hourlyRate: number,
    private hoursWorked: number,
  ) {
    super(name, lastName);
  }

  getSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

// Ejemplos de uso

const fullTimeEmp = new FullTimeEmployee("Juan", "Pérez", 3000);
console.log(fullTimeEmp.finalCompensation()); // El empleado Juan Pérez tiene un salario de 3000

console.log("==============================");

const partTimeEmp = new PartTimeEmployee("Ana", "Gómez", 20, 80);
console.log(partTimeEmp.finalCompensation()); // El empleado Ana Gómez tiene un salario de 1600
