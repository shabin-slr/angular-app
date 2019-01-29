import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: Employee;
  @Output() onCancelled = new EventEmitter();
  @Output() onSaved = new EventEmitter();
  error: any;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void{
    if(this.employee == null){
      this.employee = new Employee();
    }
  }

  save(): void {
    this.employeeService.save(this.employee).subscribe(employee => {
      this.employee = employee;
      this.onSaved.emit(this.employee);
    }, error => (this.error = error));
  }

  cancel(): void {
    this.onCancelled.emit();
  }

}
