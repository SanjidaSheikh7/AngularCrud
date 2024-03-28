import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee!:any;
  employeeId!:any;
  title:'employeeForm';
  employeeForm:FormGroup;
  form:Employee;


  constructor(private route:ActivatedRoute,
              private employeeService:EmployeeService,
              private router: Router){}

  ngOnInit(){
    this.employeeId=this.route.snapshot.paramMap.get('id');
    // alert(this.employeeId)
    this.employeeForm=new FormGroup({
      id:new FormControl(null,Validators.required),
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      mobileNumber:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required)
    });
    
    this.employeeService.getEmployeeById(this.employeeId).subscribe((response:any)=>{
       this.employee=response;
       this.employeeForm.patchValue({
        id: this.employee.id,
        name: this.employee.name,
        email: this.employee.email,
        mobileNumber: this.employee.mobileNumber,
        dob: this.employee.dob,
        address: this.employee.address
      });
    });
  }
  updateEmployee() {
    // const updatedEmployee = {
    //   name: this.employeeForm.value.name,
    //   email: this.employeeForm.value.email,
    //   mobileNumber: this.employeeForm.value.mobileNumber,
    //   dob: this.employeeForm.value.dob,
    //   address: this.employeeForm.value.address
    // };
  
    // this.employeeService.updateEmployee(updatedEmployee, this.employeeId).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //   }
    // });
    // this.router.navigate(['/employee/home']);
    const updatedEmployee = this.employeeForm.value;
    this.employeeService.updateEmployee(updatedEmployee, this.employeeId).subscribe(() => {
      this.router.navigate(['/employee/home']);
    });
  }
  
  
}