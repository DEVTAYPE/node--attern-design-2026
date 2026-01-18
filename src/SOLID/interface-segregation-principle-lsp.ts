/* 
Interface segregation principle (ISP) --> Este principio establece que los clientes no deberían verse obligados a depender de interfaces que no utilizan. En lugar de tener una interfaz grande y monolítica, es mejor dividirla en interfaces más pequeñas y específicas para que los clientes solo implementen lo que realmente necesitan.

DETECTAR QUE NO SE CUMPLE:
- Las clases implementan métodos que no utilizan.
- Las interfaces son demasiado grandes y abarcan múltiples responsabilidades.
- Cambios en una parte de la interfaz afectan a clases que no deberían verse afectadas.

COMO CUMPLIRLO:
- Divide las interfaces grandes en interfaces más pequeñas y específicas.
- Asegúrate de que las clases solo implementen los métodos que realmente necesitan.
- Mantén las interfaces enfocadas en una sola responsabilidad o conjunto de responsabilidades relacionadas.

EJEMPLO:
*/

interface Printer {
  print(document: string): void;
  scan(document: string): void;
  fax(document: string): void;
}

// Clase que implementa una interfaz grande pero no necesita todos los métodos
class SimplePrinter implements Printer {
  print(document: string): void {
    console.log("Printing document:", document);
  }

  scan(document: string): void {
    throw new Error("Scan not supported");
  }

  fax(document: string): void {
    throw new Error("Fax not supported");
  }
}

// No cumple ISP: SimplePrinter está obligado a implementar métodos que no utiliza

// Solución que cumple ISP

interface IPrinter {
  print(document: string): void;
}

interface IScanner {
  scan(document: string): void;
}

interface IFax {
  fax(document: string): void;
}

class BasicPrinter implements IPrinter {
  print(document: string): void {
    console.log("Printing document:", document);
  }
}

class AdvancedPrinter implements IPrinter, IScanner {
  print(document: string): void {
    console.log("Printing document:", document);
  }

  scan(document: string): void {
    console.log("Scanning document:", document);
  }
}
