import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './common/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    LoginComponent,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
