// ==========  INTERFACE VS ABSTRACT CLASS ==========

// ========== 1
/* 
Interfaz: Solo define la estructura de un objeto, sin implementar lógica.
Clase Abstracta: Puede definir tanto la estructura como implementar lógica compartida.
*/

interface IAnimal {
  name: string;
  makeSound(): void;
}

abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog implements IAnimal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

const myDog: IAnimal = new Dog("Buddy");
myDog.makeSound(); // Woof!

const myCat: Animal = new Cat("Whiskers");
myCat.makeSound(); // Meow!
myCat.move(); // Whiskers is moving.

// ========== 2
/* 
Interfaz: Permite la implementación múltiple.
Clase Abstracta: Solo permite herencia simple.
*/

interface IFlyable {
  fly(): void;
}

interface ISwimmable {
  swim(): void;
}

class Duck implements IFlyable, ISwimmable {
  fly(): void {
    console.log("Duck is flying.");
  }

  swim(): void {
    console.log("Duck is swimming.");
  }
}

abstract class Vehicle {
  abstract startEngine(): void;
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started.");
  }
}

const myDuck = new Duck();
myDuck.fly(); // Duck is flying.
myDuck.swim(); // Duck is swimming.

const myCar: Vehicle = new Car();
myCar.startEngine(); // Car engine started.

// ========== 3
/* 
Interfaz: No puede tener propiedades con estado.
Clase Abstracta: Puede tener propiedades con estado.
*/

interface IShape {
  area(): number;
}

abstract class Shape {
  constructor(public color: string) {}

  abstract area(): number;

  describe(): void {
    console.log(`This shape is ${this.color}.`);
  }
}

class Circle extends Shape implements IShape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle: IShape = new Circle(5, "red");
console.log(`Area of circle: ${myCircle.area()}`); // Area of circle: 78.53981633974483
(myCircle as Circle).describe(); // This shape is red.
