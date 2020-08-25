//write your code here to make the tests pass
class Document {
  constructor(name) {
    this.EmployeeName = name
  }
}

class Employee {
  constructor(name) {
    this.name = name
  }
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name))
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name
    this.employees = []
  }
  hireEmployee(name) {
    this.employees.push(new Employee(name))
  }
  askEmployeesToWork(office) {
    this.employees.forEach(e => e.work(office))
  }
}

class Cleaner {
  constructor(name) {
    this.name = name
  }
  clean() {
    console.log("Clean")
  }
}

class Office {
  constructor() {
    this.documents = []
    this.managers = []
    this.cleaners = []
  }
  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name))
  }
  hireManager(name) {
    this.managers.push(new Manager(name))
  }
  startWorkDay() {
    this.managers.forEach((m) => m.askEmployeesToWork(this))
  }
}