import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { EmployeeModel } from './Employee';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  formValue !:FormGroup;
  constructor(private formbuilder:FormBuilder,
         private api:ApiService) { }
 employeeModelObj: EmployeeModel = new EmployeeModel();
 employeeData!:any;
 showAdd!:boolean;
 showUpdate!:boolean;
  ngOnInit(): void {
  }
  clickAddEmployee(){
    
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
   this.employeeData=res;
  })
}
deleteEmployee(row : any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee deleted")
    this.getAllEmployee();
  })
}
onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.employeeModelObj.id=row.id;  
  this.formValue.controls['FirstName'].setValue(row.FirstName);
  this.formValue.controls['LastName'].setValue(row.LastName);
  this.formValue.controls['Emailid'].setValue(row.Emailid);
  this.formValue.controls['MobileNumber'].setValue(row.MobileNumber);
  this.formValue.controls['Salary'].setValue(row.Salary);
}
updateEmployeeDetails(){
  this.employeeModelObj.FirstName=this.formValue.value.FirstName;
  this.employeeModelObj.LastName=this.formValue.value.LastName;
  this.employeeModelObj.Emailid=this.formValue.value.Emailid;
  this.employeeModelObj.MobileNumber=this.formValue.value.MobileNumber;
  this.employeeModelObj.Salary=this.formValue.value.Salary;
  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset(); 
    this.getAllEmployee(); 
   
  })
}
}