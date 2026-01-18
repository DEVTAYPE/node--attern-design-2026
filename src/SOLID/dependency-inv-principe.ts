/* 
DEPENDENCY INVERSION PRINCIPLE (DIP) --> Este principio establece que los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones (por ejemplo, interfaces). Además, las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones.

COMO DETECTAR QUE NO SE CUMPLE:
- Si una clase de alto nivel depende directamente de una clase de bajo nivel.
COMO SOLUCIONARLO:
- Introducir una interfaz o clase abstracta que defina el comportamiento esperado.
- Hacer que tanto la clase de alto nivel como la de bajo nivel dependan de esta abstracción.
- Invertir las dependencias para que las clases de bajo nivel implementen la interfaz o extiendan la clase abstracta.

EJEMPLO SIN CUMPLIR DIP:
*/

class MySQLDatabase {
  connect() {
    console.log("Conectado a la base de datos MySQL");
  }
}

class UserService {
  private database: MySQLDatabase;

  constructor() {
    this.database = new MySQLDatabase();
  }

  getUser() {
    this.database.connect();
    console.log("Obteniendo usuario");
  }
}

/* 
EJEMPLO CUMPLIENDO DIP:
*/

interface Database {
  connect(): void;
}

class MySQLDatabaseV2 implements Database {
  connect() {
    console.log("Conectado a la base de datos MySQL");
  }
}

class PostgreSQLDatabase implements Database {
  connect() {
    console.log("Conectado a la base de datos PostgreSQL");
  }
}

class UserServiceV2 {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  getUser() {
    this.database.connect();
    console.log("Obteniendo usuario");
  }
}

// Uso
const mysqlService = new UserServiceV2(new MySQLDatabaseV2());
mysqlService.getUser();

const postgresService = new UserServiceV2(new PostgreSQLDatabase());
postgresService.getUser();
