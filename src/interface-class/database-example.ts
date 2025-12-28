interface IDatabase {
  save(data: string): void;
  getData(id: number): string;
}

// ============ Example
// Implementacion de la interfaz
class InMemoryDatabase implements IDatabase {
  private storage: Map<number, string> = new Map();
  private idCounter: number = 0;

  save(data: string): void {
    this.storage.set(this.idCounter++, data);
  }

  getData(id: number): string {
    return this.storage.get(id) || "Data not found";
  }
}

class MySQLDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saving data to MySQL database: ${data}`);
  }

  getData(id: number): string {
    return `Data from MySQL database with id: ${id}`;
  }
}

// ======= Ejemplo de inyeccion de dependencias
class DataService {
  constructor(private database: IDatabase) {}

  saveData(data: string): void {
    this.database.save(data);
  }

  fetchData(id: number): string {
    return this.database.getData(id);
  }
}

// Uso de la inyeccion de dependencias
const inMemoryDb = new InMemoryDatabase();
const mySQLDb = new MySQLDatabase();

const inMemoryService = new DataService(inMemoryDb);
const mySQLService = new DataService(mySQLDb);

// Guardar y obtener datos usando InMemoryDatabase
inMemoryService.saveData("Test Data 1");
console.log(inMemoryService.fetchData(0)); // Output: Test Data 1

// Guardar y obtener datos usando MySQLDatabase
mySQLService.saveData("Test Data 2");
console.log(mySQLService.fetchData(1)); // Output: Data from MySQL database with id: 1
