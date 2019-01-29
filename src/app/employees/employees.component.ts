import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'my-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  error: any;
  showEdit = false;

  constructor(private router: Router, private employeeService: EmployeeService) {}

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe(
        employees => (this.employees = employees),
        error => (this.error = error)
      )
  }

  /* addEmployee(): void {
    this.addingEmployee = true;
    this.selectedEmployee = new Employee();
  }

  close(savedEmployee: Employee): void {
    this.addingEmployee = false;
    if (savedEmployee) {
      this.getEmployees();
    }
  } */

  deleteEmployee(employee: Employee, event: any): void {
    event.stopPropagation();
    this.employeeService.delete(employee).subscribe(res => {
      this.employees = this.employees.filter(e => e !== employee);
      if (this.selectedEmployee === employee) {
        this.selectedEmployee = null;
      }
    }, error => (this.error = error));
  }

  editEmployee(employee: Employee, event: any): void {
    event.stopPropagation();
    this.selectedEmployee = employee;
    this.showEdit = true;
  }

  cancelAddEdit(): void {
    this.showEdit = false;
    this.selectedEmployee = null;
  }

  updateAfterSave(): void {
    this.showEdit = false;
    this.getEmployees();
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  /* onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.addingEmployee = false;
  } */

  /* gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEmployee.id]);
  } */
}
