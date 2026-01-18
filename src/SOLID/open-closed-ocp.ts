/* 
OPEN/CLOSE D PRINCIPLE (OCP) --> LAS ENTIDADES DE SOFTWARE DEBEN ESTAR ABIERTAS PARA LA EXTENSIÓN, PERO CERRADAS PARA LA MODIFICACIÓN

DETECTAR QUE NO SE CUMPLE:

- Cada vez que se añade una nueva funcionalidad, se modifica el código existente.
- Los cambios en los requisitos provocan modificaciones frecuentes en las clases existentes.
- Dificultad para mantener el código sin introducir errores en funcionalidades ya existentes.

COMO CUMPLIRLO:
- Utiliza la herencia o la composición para extender el comportamiento de las clases sin modificar su código fuente.
- Define interfaces o clases abstractas que puedan ser implementadas o extendidas por nuevas clases.
- Aplica el principio de inversión de dependencias para depender de abstracciones en lugar de implementaciones concretas.

EJEMPLO:

*/

interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  static totalArea(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.area(), 0);
  }
}

// Uso
const shapes: Shape[] = [new Rectangle(10, 20), new Circle(5)];

const total = AreaCalculator.totalArea(shapes);
console.log(`Total Area: ${total}`);

/* 
En este ejemplo, la clase AreaCalculator está abierta para la extensión (puede aceptar nuevas formas que implementen la interfaz Shape) pero cerrada para la modificación (no es necesario modificar su código para añadir nuevas formas). De esta manera, se cumple el principio de abierto/cerrado.
*/

/* 
Resumen de los principios SOLID vistos hasta ahora:

S: SINGLE RESPONSIBILITY PRINCIPLE (SRP) --> UNA CLASE DEBE TENER UNA SOLA RAZON PARA CAMBIAR

O: OPEN/CLOSED PRINCIPLE (OCP) --> LAS ENTIDADES DE SOFTWARE DEBEN ESTAR ABIERTAS PARA LA EXTENSIÓN, PERO CERRADAS PARA LA MODIFICACIÓN
*/
