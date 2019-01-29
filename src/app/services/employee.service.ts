import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  private employeesUrl = 'app/employees';
  constructor(private http: HttpClient) {
    
  }
  
  getEmployees() {
    return this.http
      .get<Employee[]>(this.employeesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    return this.getEmployees().pipe(
      map(employees => employees.find(employee => employee.id === id))
    );
  }

  save(employee: Employee) {
    if (employee.id) {
      return this.put(employee);
    }
    return this.post(employee);
  }

  delete(employee: Employee) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.employeesUrl}/${employee.id}`;

    return this.http.delete<Employee>(url).pipe(catchError(this.handleError));
  }

  // Add new Employee
  private post(employee: Employee) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Employee>(this.employeesUrl, employee)
      .pipe(catchError(this.handleError));
  }

  // Update existing Employee
  private put(employee: Employee) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.employeesUrl}/${employee.id}`;

    return this.http.put<Employee>(url, employee).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
