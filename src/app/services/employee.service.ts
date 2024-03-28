import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  domain: string;
  constructor(private http:HttpClient) { 
    this.domain='http://localhost:8080'; //will give the url later
  }
 public getAllEmployees():Observable<any>{
    return this.http.get<Employee[]>(`${this.domain}/employee/all`);
  }
  public getEmployeeById(employeeId:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.domain}/employee/find/${employeeId}`);
  }
  public postEmployee(employee:Employee):Observable<Employee>{
     return this.http.post<Employee>(`${this.domain}/employee/add`,employee);
  }
  public updateEmployee(employee:object,employeeId:number):Observable<Employee>{
    return this.http.put<any>(`${this.domain}/employee/update/${employeeId}`,employee);
  }
  public deleteEmployee(employeeId:number):Observable<void>{
    return this.http.delete<void>(`${this.domain}/employee/delete/${employeeId}`);
  }
  // postEmployee(url: string, object: any) {
  //   return this.http.post(url, object);
  // }
}
