import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'show-employee-info',
  templateUrl: './show-employee-info.component.html',
  styleUrls: ['./show-employee-info.component.css']
})
export class ShowEmployeeInfoComponent implements OnInit {
  employees:Employee[];
  constructor(private employeeService:EmployeeService) {
  }
  ngOnInit(): void {
    
    this.loadData();
  }
  public getAllEmployees():void{
    this.employeeService.getAllEmployees().subscribe(
      (response:Employee[])=>{
      this.employees=response;
    }
    // ,
    // (error:HttpErrorResponse)=>{
    //    alert(error.message);
    // }
    );
  }
  deleteEmployee(id:number):void{
    this.employeeService.deleteEmployee(id).subscribe((result)=>{  
      this.employees = this.employees.filter(emp => emp.id !== id);
      // alert('Are you sure to delete?');
    });
  }
  loadData() {
    this.getAllEmployees();
  }
}
