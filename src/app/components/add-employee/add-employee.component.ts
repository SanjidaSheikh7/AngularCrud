import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  title:'employeeForm';
  employeeForm:FormGroup;
  form:Employee;
  // formValueNull:boolean=false;
  // formSubmittedEmpty: boolean = false;

  constructor(private http:HttpClient,private employeeService:EmployeeService, private router: Router){

  }
  ngOnInit():void{
      this.employeeForm=new FormGroup({
        id:new FormControl(null,Validators.required),
        name:new FormControl(null,Validators.required),
        email:new FormControl(null,[Validators.required,Validators.email]),
        mobileNumber:new FormControl(null,Validators.required),
        dob:new FormControl(null,Validators.required),
        address:new FormControl(null,Validators.required)
      });
  }

  onSubmit(){
    // if(this.employeeForm.valid){
      // this.formSubmittedEmpty=false;
      this.form= this.employeeForm.value;
      console.log(this.form);
      this.employeeService.postEmployee(this.form).subscribe((result)=>{  
        console.warn(result);
        this.router.navigate(['/employee/home']).then(() => {
          this.employeeForm.reset();
        });
      })
      this.employeeForm.reset();
    }
      
  // }
}
