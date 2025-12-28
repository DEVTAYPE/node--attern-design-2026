interface IUser {
  login(): void;
  logout(): void;
}

class User implements IUser {
  login(): void {
    console.log("User logged in");
  }
  logout(): void {
    console.log("User logged out");
  }
}

class AdminUser implements IUser {
  login(): void {
    console.log("Admin logged in");
  }
  logout(): void {
    console.log("Admin logged out");
  }
}

// ============ Example

const regularUser = new User();
const adminUser = new AdminUser();

regularUser.login();
regularUser.logout();

console.log("==========LOGIN ADMIN==================");

adminUser.login();
adminUser.logout();
