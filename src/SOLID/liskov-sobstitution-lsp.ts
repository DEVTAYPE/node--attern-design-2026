/* 
LISKOV SUBSTITUTION PRINCIPLE (LSP) --> LOS OBJETOS DE UNA CLASE DERIVADA DEBEN PODER SUSTITUIR A LOS OBJETOS DE LA CLASE BASE SIN ALTERAR EL CORRECTO FUNCIONAMIENTO DEL PROGRAMA

DETECTAR QUE NO SE CUMPLE:

- Las subclases no pueden ser utilizadas en lugar de sus superclases sin causar errores o comportamientos inesperados.
- Métodos en las subclases lanzan excepciones que no están presentes en la superclase.
- Las precondiciones en los métodos de las subclases son más estrictas que en la superclase.
- Las postcondiciones en los métodos de las subclases son más débiles que en la superclase.

COMO CUMPLIRLO:
- Asegúrate de que las subclases puedan ser utilizadas en cualquier lugar donde se utilice la superclase sin alterar el comportamiento esperado.
- Mantén las precondiciones iguales o más débiles en las subclases.
- Mantén las postcondiciones iguales o más fuertes en las subclases.
- Evita lanzar nuevas excepciones en las subclases que no estén presentes en la superclase.

EJEMPLO:
*/

// class Bird {
//   fly() {
//     console.log("Flying");
//   }
// }

// class Sparrow extends Bird {
// Cumple LSP: Sparrow puede volar como cualquier Bird
// }

// class Ostrich extends Bird {
//   fly() {
// throw new Error("Ostriches can't fly");
// }
// No cumple LSP: Ostrich no puede ser sustituida por Bird sin alterar el comportamiento esperado
// }

// Solución que cumple LSP

class Bird {
  move() {
    console.log("Moving");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends FlyingBird {
  // Cumple LSP: Sparrow puede volar como cualquier FlyingBird
}

class Ostrich extends Bird {
  // Cumple LSP: Ostrich se mueve pero no vuela, no altera el comportamiento esperado de Bird
}

/* 
En este ejemplo, la clase Ostrich originalmente violaba el Principio de Sustitución de Liskov porque no podía volar como se esperaba de un Bird. Al reestructurar la jerarquía de clases para separar los pájaros que vuelan de los que no vuelan, ahora todas las subclases pueden ser sustituidas por sus superclases sin alterar el comportamiento esperado.
*/

/* 
Resumen de los principios SOLID vistos hasta ahora:

S: SINGLE RESPONSIBILITY PRINCIPLE (SRP) --> UNA CLASE DEBE TENER UNA SOLA RAZON PARA CAMBIAR

O: OPEN/CLOSED PRINCIPLE (OCP) --> LAS ENTIDADES DE SOFTWARE DEBEN ESTAR ABIERTAS PARA LA EXTENSIÓN, PERO CERRADAS PARA LA MODIFICACIÓN

L: LISKOV SUBSTITUTION PRINCIPLE (LSP) --> LOS OBJETOS DE UNA CLASE DERIVADA DEBEN PODER SUSTITUIR A LOS OBJETOS DE LA CLASE BASE SIN ALTERAR EL CORRECTO FUNCIONAMIENTO DEL PROGRAMA
*/
