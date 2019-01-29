export class Employee {
  id: number;
  name: string;
  department: string;

  constructor(id=null, name=null, department=null){
    this.id = id;
    this.name = name;
    this.department = department
  }
}
